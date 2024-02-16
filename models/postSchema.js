import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  owner: {type: String},
  comments: [{owner: {type: String}, text: {type: String}}],
  likes: [{type: String}],
  proposal: Object.getPrototypeOf("proposal._id")
});

export default mongoose.Schema("Post", postSchema);