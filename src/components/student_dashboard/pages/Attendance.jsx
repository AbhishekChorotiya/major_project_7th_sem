import React, { useEffect, useState } from "react";
import FacultyCss from "../../faculty/facultyReg/FacultyReg.module.css";
import Card from "../../student/quiz/quizCard";
import styles from "../../student/quiz/quizCard.module.css";

const Attendance_student = () => {
  const [data, setData] = useState([]);
  var sno = 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/active", {
          method: "get",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log("InActiveQuiz rendered"); // add this line

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Quiz</span>
        </div>

        <div className={styles.QuizList}>
          <table className={styles.quizTable}>
            <tr>
              <th>S No.</th>
              <th>Faculty Name</th>
              <th>Course</th>
              <th>Course Id</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
            {data.map((attendance) => (
              <Card
                key={attendance._id}
                id={attendance._id}
                sno={sno++}
                title={attendance.faculty}
                faculty={attendance.course}
                year={attendance.courseId}
                branch={attendance.branch}
                duration={attendance.year}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Attendance_student;
