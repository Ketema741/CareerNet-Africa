const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");

const Auth = require("../middleware/Auth");
const cloudinary = require("cloudinary");
const Blog = require("../models/Blog");

// @route     GET api/blogs
// @desc      Get all blogs
// @access    Public
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      date: -1,
    });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/auth
// @desc     Get single blog
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id)
      .populate("user", "firstName userImage bio email ")
    if (!blog) return res.status(404).json({ msg: req.params.id });
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/blogs
// @desc      Add new blogs
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
      const newBlog = new Blog({
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
      const blog = await newBlog.save();
      res.json(blog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT api/blog/:id
// @desc      Update blog
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

  // Build blog object
  const blogFields = {};
  if (title) blogFields.title = title;
  if (description) blogFields.description = description;
  if (category) blogFields.category = category;
  if (excerpt) blogFields.excerpt = excerpt;
  if (summary) blogFields.summary = summary;
  if (steps) blogFields.steps = steps;
  if (takeaways) blogFields.takeaways = takeaways;
  if (timeline) blogFields.timeline = timeline;

  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: "blog not found" });

    // Make sure user owns the blog
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    blog = await blog.findByIdAndUpdate(
      req.params.id,
      { $set: blogFields },
      { new: true }
    );

    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/blog/:id
// @desc      Delete blog
// @access    Private
router.delete("/:id", Auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: "blog not found" });

    // Make sure user owns blog
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const { blogImages } = blog
    deleteImage(blogImages)

    await blog.findByIdAndRemove(req.params.id);
    res.json({ msg: "blog removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const deleteImage = async (blogImages) => {
  if (blogImages.length >= 1) {
    for (const image of blogImages) {
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