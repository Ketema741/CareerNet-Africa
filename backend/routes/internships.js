const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");

const Auth = require("../middleware/Auth");
const cloudinary = require("cloudinary");
const Internship = require("../models/Internship");

// @route     GET api/internships
// @desc      Get all internships
// @access    Public
router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find()
    .sort({ date: -1, })
    .populate("user", "firstName userImage bio email ")

    res.json(internships);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/auth
// @desc     Get single internship
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let internship = await Internship.findById(req.params.id)
      .populate("user", "firstName userImage bio email ")
    if (!internship) return res.status(404).json({ msg: req.params.id });
    res.json(internship);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/internships
// @desc      Add new internships
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
      const newInternship = new Internship({
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
      const internship = await newInternship.save();
      res.json(internship);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT api/internship/:id
// @desc      Update internship
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

  // Build internship object
  const internshipFields = {};
  if (title) internshipFields.title = title;
  if (description) internshipFields.description = description;
  if (category) internshipFields.category = category;
  if (excerpt) internshipFields.excerpt = excerpt;
  if (summary) internshipFields.summary = summary;
  if (steps) internshipFields.steps = steps;
  if (takeaways) internshipFields.takeaways = takeaways;
  if (timeline) internshipFields.timeline = timeline;

  try {
    let internship = await Internship.findById(req.params.id);

    if (!internship) return res.status(404).json({ msg: "internship not found" });

    // Make sure user owns the internship
    if (internship.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    internship = await internship.findByIdAndUpdate(
      req.params.id,
      { $set: internshipFields },
      { new: true }
    );

    res.json(internship);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/internship/:id
// @desc      Delete internship
// @access    Private
router.delete("/:id", Auth, async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) return res.status(404).json({ msg: "internship not found" });

    // Make sure user owns internship
    if (internship.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const { internshipImages } = internship
    deleteImage(internshipImages)

    await internship.findByIdAndRemove(req.params.id);
    res.json({ msg: "internship removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const deleteImage = async (internshipImages) => {
  if (internshipImages.length >= 1) {
    for (const image of internshipImages) {
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