import React, { useState } from "react";
import "../styles/CreateForm.css";
import Qcard from "./Qcard";
const CreateForm = () => {
  const [formtitle, setformtitle] = useState("");

  const [formdesc, setformdesc] = useState("");

  const [qname, setqname] = useState("");

  const [questions1, setquestions1] = useState([]);

  const [type, settype] = useState("text");

  const [op, setop] = useState({
    op1: "",
    op2: "",
    op3: "",
    op4: "",
  });

  const handleoptions = (e) => [
    setop({ ...op, [e.target.name]: e.target.value }),
  ];

  const handleAdd = () => {
    const obj = {
      name: qname,
      type: type,
    };
    if (type !== "text" && type !== "file") {
      obj.options = [op.op1, op.op2, op.op3, op.op4];
    }
    console.log(obj);
    questions1.push(obj);
    setquestions1(questions1);
    console.log(questions1);
    setqname("");
    setop({
      op1: "",
      op2: "",
      op3: "",
      op4: "",
    });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    settype(e.target.value);
  };

  const handleDB = async () => {
    const formdata = {
      title: formtitle,
      desc: formdesc,
      creator: localStorage.getItem("email"),
      questions: questions1,
    };
    const data = await fetch("http://localhost:5000/submitform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const newdata = await data.json();
    console.log(newdata);
    localStorage.setItem("id", newdata);
    window.location = "/formurl";
  };

  return (
    <div className="createmain">
      <div className="chead">
        <label htmlFor="title" className="label">
          Form Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="text1"
          value={formtitle}
          onChange={(e) => {
            setformtitle(e.target.value);
          }}
        />
        <label htmlFor="desc" className="label">
          Form Description
        </label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="2"
          className="text1"
          style={{ resize: "vertical" }}
          value={formdesc}
          onChange={(e) => {
            setformdesc(e.target.value);
          }}
        ></textarea>
      </div>
      {questions1.map((ele) => {
        return <Qcard question={ele} key={ele.name} />;
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "700px",
          margin: "auto",
          gap: "30px",
        }}
      >
        <div className="qcard1">
          <label htmlFor="title" className="label">
            Type your question
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <input
              type="text"
              name="title"
              id="title"
              className="text1"
              style={{ width: "70%" }}
              value={qname}
              onChange={(e) => {
                setqname(e.target.value);
              }}
            />
            <select
              name="opt"
              id="opt"
              className="drop"
              onChange={handleSelect}
            >
              <option value="text"> Single Line</option>
              <option value="radio"> Single Choice</option>
              <option value="checkbox"> Multi Choice</option>
              <option value="file"> File</option>
            </select>
          </div>
          {type === "text" || type === "file" ? (
            <input type={type}></input>
          ) : (
            <>
              <input
                type="text"
                name="op1"
                id=""
                className="text1"
                placeholder="Enter your options:op1"
                value={op.op1}
                onChange={handleoptions}
              />
              <input
                type="text"
                name="op2"
                id=""
                className="text1"
                placeholder="Enter your options:op2"
                value={op.op2}
                onChange={handleoptions}
              />
              <input
                type="text"
                name="op3"
                id=""
                className="text1"
                placeholder="Enter your options:op3"
                value={op.op3}
                onChange={handleoptions}
              />
              <input
                type="text"
                name="op4"
                id=""
                className="text1"
                placeholder="Enter your options:op4"
                value={op.op4}
                onChange={handleoptions}
              />
            </>
          )}
          <button className="button" onClick={handleAdd}>
            <i class="fa-solid fa-plus"> </i> {"  "}Add Question
          </button>
        </div>
        <button className="button" onClick={handleDB}>
          <i class="fa-solid fa-database" style={{ marginRight: "10px" }}></i>
          {"      "}Submit Form
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
