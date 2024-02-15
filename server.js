import "dotenv/config";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
const PORT = process.env.PORT || 3001;
const app = express();

/////////
//Middleware
/////////

//Root Directory
app.get("/", (req, res) => {
  res.send("Shifty root directory")
});

/////////
//Server listener
/////////
const start = async () => {
  try {
    
  }
}