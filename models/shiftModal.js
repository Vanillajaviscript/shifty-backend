import mongoose from "mongoose";

const shiftSchema = mongoose.Schema({
  owner: {type: String},
  date: {type: Date},
  duration: {type: Date},
  department: {type: String},
  unit: {type: String},
  credentials: {type: String},
  yearsOfExperience: {type: String}
});

export default mongoose.model("Shift", shiftSchema);