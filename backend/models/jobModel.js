const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
  experience: {
    type: String,
  },
  location: {
    type: String,
  },
  salary: {
    type: String,
  },
  benefits: {
    type: String,
  },
  jobType: {
    type: String,
  },
  applicants: {
    type: [String],
    default: [],   
  },
});


module.exports = mongoose.model("Jobs", jobSchema);
