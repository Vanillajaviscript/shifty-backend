import logger from "morgan";
import cors from "cors";
import express from "express";
import userRouter from "../routes/userRouter.js";
const middleware = express();

////////////
//Middleware
////////////

const serverMiddleware = () => {
  middleware.use(logger('dev'));
  middleware.use(express.json({limit: "30mb", extended: true}));
  middleware.use(express.urlencoded({limit: "30mb", extended: true}));
  middleware.use(cors());
  middleware.use("/users", userRouter);
};

export default serverMiddleware;