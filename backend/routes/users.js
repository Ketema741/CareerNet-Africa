const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

const Auth = require("../middleware/Auth");
const User = require('../models/User')
const cloudinary = require("cloudinary");



// @route     GET api/user
// @desc      Get all user
// @access    Public
router.get("/", async (req, res) => {
  try {
    const user = await User.find().sort({
      date: -1,
    });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route    GET api/user
// @desc     Get single user
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: req.params.id });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route       POST api/user
// @desc        register a user
// @access      public
router.post(
  '/',
  [
    check("firstName", "please add name").not().isEmpty(),
    check("email", "please include a valid email!").isEmail(),
    check("password", "please enter a password with 6 or more characters")
      .isLength({ min: 6 }),
    check("phone", "please add phone and phone can not be greater than 10 diigit")
      .not()
      .isEmpty()
      .isLength({ min: 10 }),

  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      educationLevel,
      location,
      userImage,
    } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password,
        phone,
        educationLevel,
        location,
        userImage,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route     PUT api/user/:id
// @desc      Update user
// @access    Private
router.put("/:id", Auth, async (req, res) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    password,
    phone,
    educationLevel,
    location,
    userImage,

  } = req.body;

  // Build user object
  const userFields = {};
  if (firstName) userFields.firstName = firstName;
  if (lastName) userFields.lastName = lastName;
  if (email) userFields.email = email;
  if (password) userFields.password = password;
  if (phone) userFields.phone = phone;
  if (educationLevel) userFields.educationLevel = educationLevel;
  if (userImage) userFields.userImage = userImage;
  if (location) userFields.location = location;
 

  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: "user not found" });

    user = await User.findByIdAndUpdate(
      _id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});




// @route     DELETE api/user/:id
// @desc      Delete user
// @access    Private
router.delete("/:id", Auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: "user not found" });
    await user.findByIdAndRemove(req.params.id);

    res.json({ msg: "user removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


cloudinary.config({
  cloud_name: config.get("cloud_name"),
  api_key: config.get("api_key"),
  api_secret: config.get("api_secret"),
});


router.post("/image", async (req, res) => {
  const { public_id } = req.body;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.json({ msg: "Image removed" });
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server Error");
  }
});


module.exports = router;