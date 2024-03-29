import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import UserModal from "../models/userSchema.js";

const secret = process.env.SECRET;

export const signin = async (req, res) => {
  const {username, password} = req.body;
  try {
    const oldUser = await UserModal.findOne({username});
    if(!oldUser) return res.status(404).json({message: "User doesn't exist"});
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
      if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

      const token = jwt.sign({username: oldUser.username, id: oldUser._id}, secret, {expiresIn: "4000h",});
      res.status(200).json({result: oldUser, token});

    } catch(error) {
      res.status(500).json({message: "Bad Request!"});
      console.log(error);
  }
};

export const signup = async (req, res) => {
  const {username, password, firstName, lastName } = req.body;
  try {
    const oldUser = await UserModal.findOne({username});
    if(oldUser) return res.status(400).json({message: "User already exists"});
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      username,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({username: result.username, id: result._id}, secret, {expiresIn: "4000h"});
    res.status(201).json({result, token});
  } catch(error) {
    res.status(500).json({message: "Bad Request!"});
    console.log(error)
  }
};