import React from "react";
import "../styles/formurl.css";
const Formurl = () => {
  return (
    <div className="formurl">
      <h2>Your form has been successfully created.</h2>
      <p>Click the icon to copy</p>
      <div className="url">
        <div className="clip">
          <i
            id="clipicon"
            class="fa-solid fa-clipboard"
            onClick={() => {
              navigator.clipboard.writeText(
                `http://localhost:5000/view/${localStorage.getItem("id")}`
              );
              document.getElementById("clipicon").style.color = "green";
            }}
          ></i>
        </div>
        <div className="link">{`http://localhost:5000/view/${localStorage.getItem(
          "id"
        )}`}</div>
      </div>
    </div>
  );
};

export default Formurl;
