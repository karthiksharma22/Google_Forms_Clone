import React from "react";
import "../styles/Qcard.css";
const Qcard = (props) => {
  return (
    <div className="qcard">
      <h3>{props.question.name}</h3>
      {props.question.type === "text" || props.question.type === "file" ? (
        <input type={props.question.type} className="text t" />
      ) : (
        <>
          <div className="question">
            <input
              type={props.question.type}
              id="q1"
              name="name"
              value={props.question.options[0]}
              className="t"
            />
            <label htmlFor="q1">{props.question.options[0]}</label>
          </div>

          <div className="question">
            <input
              type={props.question.type}
              id="q2"
              name="name"
              value={props.question.options[1]}
              className="t"
            />
            <label htmlFor="q2">{props.question.options[1]}</label>
          </div>

          <div className="question">
            <input
              type={props.question.type}
              id="q3"
              name="name"
              value={props.question.options[2]}
              className="t"
            />
            <label htmlFor="q3"> {props.question.options[2]}</label>
          </div>

          <div className="question">
            <input
              type={props.question.type}
              id="q4"
              name="name"
              value={props.question.options[3]}
              className="t"
            />
            <label htmlFor="q4"> {props.question.options[3]} </label>
          </div>
        </>
      )}
    </div>
  );
};

export default Qcard;
