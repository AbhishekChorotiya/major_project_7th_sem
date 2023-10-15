import React from "react";
import classes from "../../student/quiz/quizCard.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/attendance?id=${props.id}`);
  }

  return (
    <>
      <tr>
        <td>{props.sno}</td>
        <td>{props.faculty}</td>
        <td>{props.course}</td>
        <td>{props.courseId}</td>
        <td>{props.branch}</td>
        <td>{props.year}</td>

        <td>
          <button className={classes.attemptButton} onClick={handleClick}>
            Attempt
          </button>
        </td>

      </tr>
    </>
  );
};

export default Card;
