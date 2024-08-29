import Navbar from "./components/Navbar";
import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Formurl from "./components/Formurl";
import CreateForm from "./components/CreateForm";
import View from "./components/View";
function App() {
  return (
    <>
      <Router>
        <div className="maindiv">
          <div className="left">
            <Navbar />
          </div>
          <div className="right">
            <h1 className="heading">
              {" "}
              NanduForms :{" "}
              <span className="spantag">
                {localStorage.getItem("name")
                  ? `Welcome ${localStorage.getItem("name")}`
                  : "Communicate , Collaborate"}
              </span>
            </h1>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/create"
                element={
                  localStorage.getItem("name") ? <CreateForm /> : <Home />
                }
              />
              <Route exact path="/formurl" element={<Formurl />} />
              <Route
                exact
                path="/view"
                element={localStorage.getItem("name") ? <View /> : <Home />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
