const mongoose = require('mongoose');
// Load models
var Book = require("./book.model"),
  User = require("./user.model"),
  Schema = mongoose.Schema;
  
const borrowSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,  
    userId: {
         type: Schema.Types.ObjectId, 
         ref: "userModel",
         required: true 
    },
    bookId: { 
        type: Schema.Types.ObjectId, 
        ref: "bookModel", 
        required: true 
    },
    usermax:{  //check for each person to get max 3 books
        type: Number, 
        required: true,
        max: 3
    }
    //add check for Is the book available in the library?
});

mongoose.model('borrowModel', borrowSchema);

