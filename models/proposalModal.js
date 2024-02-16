import mongoose from "mongoose";

const proposalSchema = mongoose.Schema({
  coverageNeeded: [{type: String}],
  coverageOffered: [Date]
});

export default mongoose.model("Proposal", proposalSchema);