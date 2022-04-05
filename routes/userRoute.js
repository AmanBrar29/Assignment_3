const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

//load the add user view. get : /user/add
router.get("/add", userController.addUserView);

//get all list of users and throw on view. get : /user/
router.get("/", userController.getAllUsers);

//add user to the database post: /user
router.post("/", userController.insertUser);

//update a user in the database 
router.post("/", userController.updateUser);

//delete a user from the database
router.delete("/:id", userController.deleteUser);

//to export function router
module.exports = router;