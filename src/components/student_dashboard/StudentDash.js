import React, { useEffect, useState } from "react";
import StudentDashCss from "./StudentDash.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import Dash from "./pages/Dashboard";
import Test from "./pages/Test";

import AttendancePage from "./pages/attendance/AttendancePage";

const StudentDash = () => {
  const navigate = useNavigate();

  function handleQuiz() {
    navigate(`/active`);
  }

  const [data, setData] = useState({
    Name: "Loading...",
    Father: "Loading...",
    Gender: "Loading...",
    Contact: "Loading...",
    Branch: "Loading...",
    Id: "Loading...",
    Semester: "Loading...",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/studentInfo", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json(1);
    setData(data);
    console.log(data);
  };

  // Handle navigation button

  const [pageNo, setPageNo] = useState(1);

  return (
    <div className={StudentDashCss.container}>
      <div className={StudentDashCss.nav}>
        <img src="pictures/LOGO.png" />
        <span>STUDENT PANEL</span>

        <div className={StudentDashCss.student_logout}>
          <button
            style={{
              background: "white",
              padding: "0.5rem",
              borderRadius: "0.4rem",
            }}
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </button>
        </div>
      </div>

      <div className={StudentDashCss.semesterBox}>
        <span id={(StudentDashCss.semHead, StudentDashCss.center)}>
          Current-Sem
        </span>
        <span id={StudentDashCss.semHead}>{data.Semester}</span>
      </div>

      <div className={StudentDashCss.front}>
        <div className={StudentDashCss.options}>
          <button onClick={() => setPageNo(1)}>Dashboard</button>
          <button onClick={() => setPageNo(2)}>Class Schedule</button>
          <button onClick={() => setPageNo(3)}>Attendance</button>
          <button onClick={() => setPageNo(4)}>Assignments</button>
          <button onClick={() => setPageNo(5)}>Academic Progress</button>
          <button onClick={() => setPageNo(6)}>Courses</button>
          <button onClick={() => setPageNo(7)}>Study Material</button>
          <button onClick={() => setPageNo(8)}>Faculty Feedback</button>
          <button onClick={() => setPageNo(9)}>Student Feedback</button>
          <button
            onClick={handleQuiz}
            // onClick={() => setPageNo(10)}
          >
            Quiz
          </button>
          <button onClick={() => setPageNo(11)}>Announcements</button>
          <button onClick={() => setPageNo(12)}>Academic Support</button>
        </div>

        <div className={StudentDashCss["panel-display"]}>
          {pageNo == 1 ? <Dash /> : pageNo == 3 ? <AttendancePage /> : <Dash />}
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
