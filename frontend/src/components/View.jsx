import React, { useState } from "react";
import * as XLSX from "xlsx";
import "../styles/view.css";
import Qcard from "./Qcard";
const View = () => {
  const [url, seturl] = useState("");

  const [data, setdata] = useState([]);

  const viewform = async () => {
    const data1 = await fetch(url);
    const newdata = await data1.json();
    console.log(newdata);
    setdata(newdata);
  };

  const download = async (e) => {
    e.preventDefault();
    const id = url.split("view/")[1];
    const data = await fetch(`http://localhost:5000/download/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newdata = await data.json();
    const responses = newdata.data;
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.aoa_to_sheet(responses);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Export the workbook to a file
    XLSX.writeFile(workbook, `${newdata.title}.xlsx`);
  };

  const viewformsubmit = async (e) => {
    let elements = document.getElementsByClassName("t");
    let answers = [];
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i].value);
      if (elements[i].type !== "text" && !elements[i].checked) continue;
      else answers.push(elements[i].value);
    }
    const data = await fetch("http://localhost:5000/viewformsubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: url.split("view/")[1], answers }),
    });
    const newdata = await data.json();
    console.log(newdata);
  };

  return (
    <>
      <div className="chead" style={{ border: "none" }}>
        <h2>Enter the url:</h2>
        <input
          type="text"
          className="text1"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
          style={{ color: "#4f5250", fontFamily: "consolas" }}
        />
        <input
          type="submit"
          value="submit"
          className="button"
          onClick={viewform}
        />
      </div>
      {data.title && (
        <form className="chead">
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </form>
      )}
      {data.questions && (
        <>
          <form onSubmit={viewformsubmit} id="viewform" className="form1">
            {" "}
            {data.questions.map((ele) => {
              return <Qcard question={ele} key={ele.name} />;
            })}
            <input type="submit" value={"Submit"} className="submit2" />
            <button onClick={download} className="download-button">
              <i className="fa-solid fa-cloud-arrow-down"></i> Download
              Responses
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default View;
