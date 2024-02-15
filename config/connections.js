import mongoose from "mongoose";

///////////
//Database Connection
///////////

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATA_URL)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch(error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
};

export default connectDB;