/*
Book {
id: a unique number that should get generated automatically (start from 1) and
returned by the API in the case of creating a new book.
title: a unique mandatory string
inventory_count: the number of copies of this book available in our library inventory. If this number is 0 we cannot loan it to anybody because we don’t have any copy to loan.
}
*/
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,  
    id:{
        type:Number,
        /*add auto-increment*/
        required: true
    },
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    inventory_count: {
        type: Number, 
        required: true 
    }
});

mongoose.model('bookModel', bookSchema);