const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = mongoose.model("bookModel");

//@private
//@usage : loads the view to add a book
exports.addBookView = async (req, res) => {
  try {
    console.log("req", req.body);
    res.render("book/editBook", {
      viewTitle: "Insert Book",
    });
  } catch (err) {
    console.log('Error in inserting book record.')
  }
};

//@private
//@usage : get all books
exports.getAllBooks = async (req, res) => {
  try {
    Book.find().then((result) => {
      if (result) {
        res.render("book/listBook", {
          booklist: result,
        });
      } else {
        console.log("Error in retrieving book list.");
      }
    });
  } catch (err) {
    console.log('Error in retrieving book list : ' + err);
  }
};

//@private
//@usage : insert book.
exports.insertBook = async (req, res) => {
  try {
    let fields = {};
    let { title, inventory_count } = req.body;
    fields.title = title;
    fields.inventory_count = inventory_count;

    new Book({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      inventory_count: inventory_count
    })
      .save()
      .then((doc) => {
        let docs = Book.find().lean().exec();
        res.render("book/listBook", {
          booklist: docs,
        });
      })
      .catch((err) => {
        console.log('Error in inserting book record');
      });
  } catch (err) {
    console.log('Error in retrieving book list');
  }
};

//@private
//@usage : update book.
exports.updateBook = async (req, res) => {
  try {
    let fields = {};
    let { _id, title, inventory_count } = req.body;
    fields.title = title;
    fields.inventory_count = inventory_count;

    Book.findOneAndUpdate(
      { _id: _id },
      { $set: fields },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log('Error in updating book list : ' + err );
        } else {
          console.log('Book record updated successfully.');
        }
      }
    ).catch((err) => {
      console.log('Error in retrieving Book record : ' + err)
    });
  } catch (err) {
    console.log('Error in updating Book record : ' + err);
  }
};

//@private
//@usage : delete book.
exports.deleteBook = async (req, res) => {
  try {
    let fields = {};
    let { _id, title, inventory_count  } = req.body;
    fields.title = title;
    fields.inventory_count = inventory_count;

    Book.findOneAndDelete(
      { _id: id },
      (err, doc) => {
        if (err) {
          console.log('Error in finding Book record : ' + err);
        } else {
          console.log(' Book record deleted successfully');
        }
      }
    ).catch((err) => {
      console.log('Error in deleting Book record : ' + err);
    });
  } catch (err) {
    console.log('Error in finding Book record : ' + err);
  }
};

//test
