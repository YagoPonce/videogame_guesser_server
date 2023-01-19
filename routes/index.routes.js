const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const videogamesRouter = require("./gameform.routes");
router.use("/videogames", videogamesRouter);

const uploadRoutes = require("./upload.routes");
router.use("/uploader", uploadRoutes);


module.exports = router;
