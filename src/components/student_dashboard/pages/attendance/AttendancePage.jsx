import React, { useEffect, useState } from "react";
import styles from "./attendance.module.css";

function AttendancePage() {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const res = await fetch("http://localhost:5000/api/courses", {
      method: "get",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    if (data) {
      setCourses(data);
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
            <th>Course</th>
            <th>Course Credit</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Faculty Id</th>
            <th>Mark Attendance</th>
          </tr>
          {courses &&
            courses.map((item, index) => (
              <tr className={styles["table-row"]} key={index}>
                <td>{srNo++}</td>
                <td>{item.CourseId}</td>
                <td>{item.CourseName}</td>
                <td>{item.CourseCredit}</td>
                <td>{item.Branch}</td>
                <td>{item.Semester}</td>
                <td>{item.FacultyId}</td>
                <td>
                  <button>Present</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendancePage;
