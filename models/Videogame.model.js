const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const videogameSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    release: Date,
    description: String,
    metacriticScore: Number,
    developer: String,
    genre: String

  },
  {
    timestamps: true
  }
);
 
module.exports = model("Videogame", videogameSchema);

name: nameInput,
      imageUrl: imageURL,
      release: releaseInput,
      description: descriptionInput,
      metacriticScore: metacriticScoreInput,
      developed: developerInput,
      genre: genreInput,