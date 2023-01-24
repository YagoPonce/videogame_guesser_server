const express = require("express");
const router = express.Router();
const genres = require("../utils/genres")
const Videogame = require("../models/Videogame.model")

const fileUploader = require("../config/cloudinary.config");

// POST "/api/videogames/upload-image" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload-image", fileUploader.single("imageUrl"), (req, res, next) => {
    // console.log("file is: ", req.file)
   
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    
    res.json({ fileUrl: req.file.path });
  });


  // POST '/api/videogames/create-videogame' => for saving a new videogame in the database
router.post("/create-videogame", async (req, res, next) => {
  
    const { name, release, description, metacriticScore, players, genre, developer } = req.body;
  
    //get data from FE to send BE
    const newVideogame = {
      name: name,
      release: release,
      description: description,
      metacriticScore: metacriticScore,
      imageUrl: req.body.imageUrl === "" ? undefined : req.body.imageUrl,
      imageNameless: req.body.imageNameless === "" ? undefined : req.body.imageNameless,
      players: players,
      genre: genre,
      developer: developer,
    };
  
    //use newVideogame to create newVideogame in DB
    try {
      await Videogame.create(newVideogame);
      res.status(201).json("New videogame created in DB");
    } catch (error) {
      next(error);
    }
  });

  // GET "/api/videogames/genres" -> shows genres in Videogames model
router.get("/genres", async (req, res, next) => {
    res.status(200).json(genres);
  });

  module.exports = router;