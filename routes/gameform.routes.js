const express = require("express");
const router = express.Router();

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
  
    const { name, release, description, imageUrl, metacriticScore } = req.body;
  
    //get data from FE to send BE
    const newVideogame = {
      name: name,
      imageUrl: imageUrl,
      release: release,
      description: description,
      metacriticScore: metacriticScore,
      imageUrl: req.body.image === "" ? undefined : req.body.image
    };
  
    //use newRecipe to create new Recipe in DB
    try {
      await Videogame.create(newVideogame);
      res.status(201).json("New videogame created in DB");
    } catch (error) {
    next(error);
    console.log("no está funcionando")
    }
  });

  module.exports = router;