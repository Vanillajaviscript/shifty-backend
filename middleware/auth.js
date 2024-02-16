import jwt from "jsonwebtoken";
import UserModel from "../models/userSchema.js";
import "dotenv/config";

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if(token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = user?._id;
    }
    next();
  } catch(error) {
    console.log(error);
  }
};

export default auth;