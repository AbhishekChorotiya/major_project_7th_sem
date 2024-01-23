import React, { useEffect, useState } from "react";
import styles from "./StudyMaterial.module.css";

function StudyMaterial() {
  //   const [courses, setCourses] = useState();

  useEffect(() => {
    // fetchCourse();
  }, []);

  const fetchCourse = async () => {
    // const res = await fetch("http://localhost:5000/api/courses", {
    //   method: "get",
    //   credentials: "include",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // if (data) {
    //   setCourses(data);
    //   console.log(data);
    // }
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
          {/* {courses &&
            courses.map((item, index) => (
              
            ))} */}

          <tr className={styles["table-row"]}>
            <td>1</td>
            <td>ect123</td>
            <td>ABC</td>
            <td>Arun Kishore Johar</td>
            <td style={{ position: "relative" }}>
              <button>click</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudyMaterial;
