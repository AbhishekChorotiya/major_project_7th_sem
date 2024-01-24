import React, { useEffect, useState } from "react";
import styles from "./StudyMaterial.module.css";
import { useNavigate } from "react-router-dom";

function StudyMaterial() {

  const [StudyMaterial,setStudyMaterial] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchCourse();
  }, []);

  function handleClick(i){
    window.location.href = StudyMaterial[i].Link
  }

  const fetchCourse = async () => {
    const res = await fetch("http://localhost:5000/getStudyMaterial", {
      method: "post",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      setStudyMaterial(data);
      console.log(data);
    }
  };

  let srNo = 1;

  return (
    <div className={styles["container"]}>
      <table className={styles["table"]}>
        <tbody>
          <tr className={styles["table-head"]}>
            <th>Sr No</th>
            <th>Course Id</th>
            <th>Title</th>
            <th>Uploaded By</th>
            <th>View</th>
          </tr>

            {
              StudyMaterial.map((_,i)=>(
                <tr className={styles["table-row"]}>
                <td>{i+1}</td>
                <td>{_.CourseId}</td>
                <td>{_.Title}</td>
                <td>{_.FacultyName}</td>
                <td style={{ position: "relative" }}>
                  <button onClick={()=>{handleClick(i)}}>click</button>
                </td>
              </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default StudyMaterial;
