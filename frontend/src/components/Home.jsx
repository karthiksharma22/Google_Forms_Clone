import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  document.title = "NanduForms";
  const handleEvent = () => {
    setTimeout(() => {
      window.location.pathname = "/login";
    }, 3000);
  };
  return (
    <div>
      {localStorage.getItem("name") ? (
        <div className="create">
          <p className="please1">
            Craft cohesive and customized forms effortlessly, putting powerful
            form-building tools at your fingertips.
          </p>

          <Link to="/create">
            <img
              src="https://media.istockphoto.com/id/522539379/vector/plus-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=qLsK1PBbHVFzLSUpgu26b1hihzBxk65tLUbIlA0yhd8= "
              alt=""
              className="add"
            />
          </Link>
        </div>
      ) : (
        <>
          <p className="please">
            Please login to continue.
            <br />{" "}
            <span className="redirect">Redirecting to Login page.....</span>
          </p>
          {handleEvent()}
        </>
      )}
    </div>
  );
};

export default Home;
