import React, { useEffect, useState } from "react";
import QuizzCss from "./Quizz.module.css";
import FacultyCss from "../facultyReg/FacultyReg.module.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../general/dropdown/Dropdown";

let UploadMaterial = () => {
  const [title, setTitle] = useState("");
  const [selectedCourse, setSelectCourse] = useState("");
  const [link, setLink] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const navigate = useNavigate();
  const [ids, setIds] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "link") {
      setLink(value);
    }
    if (name === "additionalInfo") {
      setAdditionalInfo(value);
    }
    if(name === "title"){
      setTitle(value)
    }
  };

  useEffect(()=>{
    getCourses()
  },[])

  async function getCourses(){
    const res = await fetch('http://localhost:5000/getCourseId',{
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()
    const ids = data.map((a)=>a.label)
    setIds(Object.values(ids))
    console.log(Object.values(ids))
  }

  const handleSubmit = async () => {
    const post_data = { title,selectedCourse,link,additionalInfo };
    const res = await fetch("http://localhost:5000/studyMaterial", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_data),
    });
    console.log(post_data);
    const data = await res.json();
    if(data == 'done'){
      alert('Study Material Uploaded Successfully')
    }else{
      alert('Error... Please Try Again')
    }
    console.log(data);
  };

  const handleOnSelect = (res) => {
    setSelectCourse(res);
    console.log(res);
  };

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Upload Study Material</span>
        </div>
        <div className={FacultyCss.form}>
          <div className={FacultyCss.frm}>
            <label className={FacultyCss.labl} for="title">
              Title:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Title of the content..."
              name="title"
              onChange={handleChange}
            />
            <label className={FacultyCss.labl} for="marks">
              Select Course:
            </label>
            <Dropdown
              data={ids}
              onSelect={handleOnSelect}
            />

            <label className={FacultyCss.labl} for="link">
              Link:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Paste link here"
              name="link"
              onChange={handleChange}
            />

            <span>or</span>

            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: ".9rem",
                display: "flex",
                alignSelf: "center",
              }}
            >
              attach file
            </a>

            <label className={FacultyCss.labl} for="marks">
              Additional Information:
            </label>
            <textarea
              className={`${FacultyCss["additionalInfo"]} ${FacultyCss["inp"]}`}
              type="text"
              placeholder="Additional Information"
              name="additionalInfo"
              onChange={handleChange}
            />

            <button className={FacultyCss.btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMaterial;
