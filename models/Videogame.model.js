const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const genres = require("../utils/genres")
 
const videogameSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    imageNameless: String,
    release: Date,
    description: String,
    metacriticScore: Number,
    developer: String,
    players: Number,
    genre: [{
      type: String[],
      enum: genres,
    }],
  },
  {
    timestamps: true
  }
);
 
module.exports = model("Videogame", videogameSchema);   