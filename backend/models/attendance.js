const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  facultyID: {
    type: String,
  },
  course: {
    type: String,
  },
  courseId: {
    type: String,
  },
  branch: {
    type: String,
  },
  year: {
    type: String,
  },
  Date: {
    type: Date,
  },
  students: [{
    id:{
      type: String,
    }
  }
  ]
});

const attendanceObj = mongoose.model("attendance", attendanceSchema);

module.exports = attendanceObj;
