import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

const Register = () => {
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0,200)
  }, []);

  const navigate = useNavigate();

  const showPassword = () => {
    setShowPass((prev) => !prev);
  };
  const handleChange = (event) => {
    setUser((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!user.username || !user.email || !user.password) {
      setError("All fields must be filled.");
      return;
    }

    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(user.password)) {
      setError(
        "Password must be at least 8 characters, including letters and numbers."
      );
      return;
    }

    if (!isChecked) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isUserExists = storedUsers.some(
      (existingUser) =>
        existingUser.email === user.email ||
        existingUser.username === user.username
    );

    if (isUserExists) {
      setError("This username or email is already taken.");
      setUser({ username: "", email: "", password: "" });
      return;
    }

    const newUsers = [...storedUsers, user];
    localStorage.setItem("users", JSON.stringify(newUsers));

    setError("");
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>CREATE ACCOUNT</i>
            </h1>
          </div>
        </div>
        <div className="row g-0 py-4" data-aos="fade-right">
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-4 pb-4">
              <div className="header">
                <h2 className="pt-3">Create account</h2>
              </div>
              <form
                className="d-flex flex-column gap-4 mt-3 mb-3"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-column in gap-2">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Your username"
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column in gap-2">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label>Password</label>
                  <div className="input-group flex-nowrap pass">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Your password"
                      value={user.password}
                      onChange={handleChange}
                      name="password"
                      className="pass"
                    />
                    <span
                      className="input-group-text lock-pass"
                      id="addon-wrapping"
                      onClick={showPassword}
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="mx-2">
                    I have read and agree with the <b>Terms and Conditions</b>
                  </span>
                </div>
                <div className="text-center">
                  <button type="submit" className="mb-3 mt-2 button-log-reg">
                    Sign Up
                  </button>
                  <p
                    className="text-center"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {error}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
