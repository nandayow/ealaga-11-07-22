const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const emailvalidator = require("email-validator");

// UserList
router.get(`/`, async (req, res) => {
  // const userList = await User.find();
  const userList = await User.find().select("-password");
  console.log(userList);

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

// SingleUser
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found." });
  }
  res.status(200).send(user);
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  // console.log(user);
  const secret = process.env.secret;

  if (!user) {
    return res.status(400).send("The user not found");
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.user_name,
        firstname:user.first_name,
        middlename:user.middle_name,
        lastname:user.last_name,
        profile_picture:user.profile_picture,
        email:user.email,
        role: user.role,
      },
      secret,
      { expiresIn: "1d" }
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("password is wrong!");
  }
});

module.exports = router;
