// import React from "react";
import Styles from "./Styles.module.css";
import { useEffect, useState } from "react";
import * as XLSX from 'xlsx'

let Create_attendence = () => {
  const [courseId, setCourseid] = useState("");
  const [courseName, setCourseName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [facultyName,setFacutyName] = useState("")


  const handleChange = (e) => {
    // console.log(e.target.name)

    if (e.target.name == "courseid") {
      setCourseid(e.target.value);
    }
    if (e.target.name == "coursename") {
      setCourseName(e.target.value);
    }
    if (e.target.name == "branch") {
      setBranch(e.target.value);
    }
    if (e.target.name == "semester") {
      setSemester(e.target.value);
    }
    console.log(e.target.value);
  };

  useEffect(async ()=>{
    const res = await fetch('http://localhost:5000/get_faculty',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
    })
    const data = await res.json()
    setFacultyId(data.Id)
    setFacutyName(data.Name)
    console.log(data)
  },[])


  let objectKeysToLowerCase = function (origObj) {
    return Object.keys(origObj).reduce(function (newObj, key) {
        let val = origObj[key];
        let newVal = (typeof val === 'object') ? objectKeysToLowerCase(val) : val;
        newObj[key.split(/[.\-_ ']/).join('').toLowerCase()] = newVal;
        return newObj;
    }, {});
}


  const handleSubmit = async () => {
    const post_data = {
      courseId,
      courseName,
      branch,
      semester,
      facultyId,
    };

    const res = await fetch("http://localhost:5000/addAttendence", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_data),
    });

    const data = await res.json();
    console.log(data);
    alert(data);
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.nav}>
          <span>Create Attendance</span>
        </div>
        <div className={Styles.top}>
          <h4>Faculty Name : {facultyName}</h4>
        </div>
        <div className={Styles.form}>
          <div className={Styles.frm}>
            <label className={Styles.labl} for="name">
              Course Id
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Course ID"
              name="courseid"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="course name">
              Course Name
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Course Name"
              name="coursename"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="branch">
              Branch
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter branch"
              name="branch"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="semester">
              Semester
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Semester"
              name="semester"
              onChange={handleChange}
            />

            <button className={Styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_attendence;
