const express = require("express");
const userControllers = require("./../controllers/userControllers");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", authController.signup);

router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);

router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
