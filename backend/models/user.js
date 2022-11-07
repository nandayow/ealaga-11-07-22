const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter your first name"],
    maxLength: [15, "Your name cannot exceed 30 characters"],
  },
  middle_name: {
    type: String,
    required: [true, "Please enter your middle name"],
    maxLength: [15, "Your name cannot exceed 30 characters"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name"],
    maxLength: [15, "Your name cannot exceed 30 characters"],
  },
  age: {
    type: Number,
  },
  birth_date: {
    type: Date,
  },
  gender: {
    type: String,
  },
  address: {
    house_purok_no: {
      type: String,
    },
    street: {
      type: String,
    },
    barangay: {
      type: String,
    },
  },
  user_name: {
    type: String,
    minlength: [6, "Your user_name must be longer than 6 characters"],
    required: [true, "Please enter your username"],
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Your password must be longer than 6 characters"],
    select: false,
  },
  profile_picture: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  valid_id: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "personnel", "client"],
      message: "Please select correct role for user",
    },
  },
  status: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: "Please select status role for user",
    },
  },
  health_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Health",
    },
  ],

  account_verified: {
    type: String,
    required: true,
    enum: {
      values: ["not verified", "pending", "verified"],
      message: "Please select status role for user",
    },
    default: "not verified",
  },
  email_verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: { type: String },
  resetPasswordExpire: { type: Date },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;
