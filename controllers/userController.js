const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('userModel');
//@private
//@usage : loads the view to add a user
exports.addUserView = async (req, res) => {
  try {
    console.log("req", req.body);
    res.render("user/editUser", {
      viewTitle: "Insert User",
    });
  } catch (err) {
    console.log('Error in inserting user record.')
  }
};

//@private
//@usage : get all users
exports.getAllUsers = async (req, res) => {
  try {
    User.find().then((result) => {
      if (result) {
        res.render("user/listUser", {
          userlist: result,
        });
      } else {
        console.log("Error in retrieving user list.");
      }
    });
  } catch (err) {
    console.log('Error in retrieving user list : ' + err);
  }
};

//@private
//@usage : insert user.
exports.insertUser = async (req, res) => {
  try {
    let fields = {};
    let { username, phone } = req.body;
    fields.username = username;
    fields.phone = phone;

    new User({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      phone: phone
    })
      .save()
      .then((doc) => {
        let docs = User.find().lean().exec();
        res.render("user/listUser", {
          userlist: docs,
        });
      })
      .catch((err) => {
        console.log('Error in inserting user record');
      });
  } catch (err) {
    console.log('Error in retrieving user list');
  }
};

//@private
//@usage : update user.
exports.updateUser = async (req, res) => {
  try {
    let fields = {};
    let { _id, username, phone } = req.body;
    fields.username = username;
    fields.phone = phone;

    User.findOneAndUpdate(
      { _id: _id },
      { $set: fields },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log('Error in updating user list : ' + err );
        } else {
          console.log('User record updated successfully.');
        }
      }
    ).catch((err) => {
      console.log('Error in retrieving User record : ' + err)
    });
  } catch (err) {
    console.log('Error in updating User record : ' + err);
  }
};

//@private
//@usage : delete user.
exports.deleteUser = async (req, res) => {
  try {
    let fields = {};
    let { _id, username, phone  } = req.body;
    fields.username = username;
    fields.phone = phone;

    User.findOneAndDelete(
      { _id: id },
      (err, doc) => {
        if (err) {
          console.log('Error in finding User record : ' + err);
        } else {
          console.log(' User record deleted successfully');
        }
      }
    ).catch((err) => {
      console.log('Error in deleting User record : ' + err);
    });
  } catch (err) {
    console.log('Error in finding User record : ' + err);
  }
};
