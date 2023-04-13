const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowerCase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "please provide a passsword"],
    minlength: [8, "password must be at least 8 characters"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      //Rem this only works on CREATE and SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  //only runs if password was modified
  if (!this.isModified("password")) return next();

  //hash password with cost 12
  this.password = await bycrypt.hash(this.password, 12);

  //delete passwordConfirm field
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bycrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }
  //False means PSWD not changed
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
