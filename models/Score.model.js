const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const scoreSchema = new Schema(
  {
    score: number,
    gameType: String,
    playerName: String,
    user: {
        //feeds from User.model
        type: Schema.Types.ObjectId,
        ref: "User"
      },
  },
  {
    timestamps: true
  }
);
 
module.exports = model("Score", scoreSchema);