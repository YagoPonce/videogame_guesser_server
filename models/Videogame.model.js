const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const videogameSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    release: Date,
    description: String,
    metacriticScore: Number
  },
  {
    timestamps: true
  }
);
 
module.exports = model("Videogame", videogameSchema);