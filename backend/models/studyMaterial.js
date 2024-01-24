const mongoose = require("mongoose");

const StudyMaterialSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  CourseId: {
    type: String,
    required: true,
  },
  Link:{
    type : String,
  },
  FacultyName:{
    type : String,
  },
  AdditionalInfo:{
    type : String,
  }
});

const StudyMaterialObj = mongoose.model("StudyMaterial", StudyMaterialSchema);

module.exports = StudyMaterialObj;
