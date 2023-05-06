const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");

const Auth = require("../middleware/Auth");
const cloudinary = require("cloudinary");
const Job = require("../models/Job");

// @route     GET api/jobs
// @desc      Get all jobs
// @access    Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find()
    .sort({ date: -1, })
    .populate("user", "firstName userImage bio email ")

    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/auth
// @desc     Get single job
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let job = await Job.findById(req.params.id)
      .populate("user", "firstName userImage bio email ")
    if (!job) return res.status(404).json({ msg: req.params.id });
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/jobs
// @desc      Add new jobs
// @access    Private
router.post(
  "/",
  Auth,
  check("title", "title is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      excerpt,
      description,
      category,
      summary,
      steps,
      takeaways,
      timeline,
    } = req.body;

    try {
      const newJob = new Job({
        title,
        excerpt,
        description,
        category,
        summary,
        steps,
        takeaways,
        timeline,
        user: req.user.id,
      });
      const job = await newJob.save();
      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT api/job/:id
// @desc      Update job
// @access    Private
router.put("/:id", Auth, async (req, res) => {
  const {
    title,
    excerpt,
    description,
    category,
    summary,
    steps,
    takeaways,
    timeline,
  } = req.body;

  // Build job object
  const jobFields = {};
  if (title) jobFields.title = title;
  if (description) jobFields.description = description;
  if (category) jobFields.category = category;
  if (excerpt) jobFields.excerpt = excerpt;
  if (summary) jobFields.summary = summary;
  if (steps) jobFields.steps = steps;
  if (takeaways) jobFields.takeaways = takeaways;
  if (timeline) jobFields.timeline = timeline;

  try {
    let job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ msg: "job not found" });

    // Make sure user owns the job
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    job = await job.findByIdAndUpdate(
      req.params.id,
      { $set: jobFields },
      { new: true }
    );

    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/job/:id
// @desc      Delete job
// @access    Private
router.delete("/:id", Auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ msg: "job not found" });

    // Make sure user owns job
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const { jobImages } = job
    deleteImage(jobImages)

    await job.findByIdAndRemove(req.params.id);
    res.json({ msg: "job removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const deleteImage = async (jobImages) => {
  if (jobImages.length >= 1) {
    for (const image of jobImages) {
      const res = await cloudinary.uploader.destroy(image.public_id);
      console.log(res)
    }
  }
}

cloudinary.config({
  cloud_name: config.get("cloud_name"),
  api_key: config.get("api_key"),
  api_secret: config.get("api_secret"),
});

router.post("/image", async (req, res) => {
  const { public_id } = req.body;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server Error");
  }
});

module.exports = router; 