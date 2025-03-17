import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = ({ setUserRole }) => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 80);
  }, []);

  const showPassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (event) => {
    setUser((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!user.email || !user.password) {
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

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      alert("Login successful!");
      navigate("/user-dashboard");
      setUserRole("user");
      localStorage.setItem("userRole", "user");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>LOGIN</i>
            </h1>
          </div>
        </div>
        <div className="row g-0 py-4" data-aos="fade-right">
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-4 pb-4">
              <div className="header">
                <h2 className="pt-3">Login account</h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4 mt-3 mb-3"
              >
                <div className="d-flex flex-column in gap-2">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    className="first-input"
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
                      className="pass lock-pass"
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
                <div className="text-center">
                  <p
                    className="text-center"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {error}
                  </p>
                  <button type="submit" className="mb-1 button-log-reg">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center">
                Do not have an account?{" "}
                <Link to="/signup" className="sign-link">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
