const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const videogamesRouter = require("./gameform.routes");
router.use("/videogames", videogamesRouter);

module.exports = router;
