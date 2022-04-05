const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//load the add book view. get : /book/add
router.get("/add", bookController.addBookView);

//get all list of books and throw on view. get : /book/
router.get("/", bookController.getAllBooks);

//add book to the database post: /book
router.post("/", bookController.insertBook);

//update a book in the database 
router.post("/", bookController.updateBook);

//delete a book from the database
router.delete("/:id", bookController.deleteBook);

//to export function router
module.exports = router;
