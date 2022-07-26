//Import Dependencies
const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Structure

const CatalogSchema = new Schema({
    title: String,
    author: String,
    editorial: String,
    genre: String
})

module.exports = mongoose.model("Catalog", CatalogSchema)