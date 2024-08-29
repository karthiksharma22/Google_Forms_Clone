import React, { useState } from "react";

import "../styles/Login.css";
const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [newuser, setnewuser] = useState(false);
  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // backend request sample.
    const data = await fetch("http://localhost:5000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const newdata = await data.json();
    console.log(newdata);

    if (newdata.msg) {
      window.location = "/";
      localStorage.setItem("email", login.email);
      localStorage.setItem("name", newdata.user.name);
    } else alert(newdata.error);
  };
  document.title = "NanduForms | Login";
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {!newuser ? (
          <>
            {" "}
            <h2>Login</h2>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="text"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
            <label htmlFor="pw" className="label">
              Password
            </label>
            <input
              type="password"
              id="pw"
              className="text"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
            <p>
              Don't have an account?{" "}
              <span
                className="register"
                onClick={() => {
                  setnewuser(true);
                }}
              >
                Register Here
              </span>
            </p>
          </>
        ) : (
          <>
            {" "}
            <h2>Register</h2>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="text"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
            <label htmlFor="name" className="label">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="text"
              name="name"
              value={login.name}
              onChange={handleChange}
            />
            <label htmlFor="pw" className="label">
              Password
            </label>
            <input
              type="password"
              id="pw"
              className="text"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
            <p>
              Have an account?{" "}
              <span
                className="register"
                onClick={() => {
                  setnewuser(false);
                }}
              >
                Login Here
              </span>
            </p>
          </>
        )}
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default Login;
