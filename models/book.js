/*
File name: book.js
Author’s Name: Apple Coleene Duquinal
StudentID:  301000645
Web App Name: COMP229-M2021-MidTerm-301000645
*/

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);