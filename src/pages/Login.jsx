import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = ({setUserRole}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 80);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      navigate("/user-dashboard");
      setUserRole("user")
      localStorage.setItem("userRole", "user");
      return;
    } else {
      setError("Invalid email or password.");
      navigate("/login");
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
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 mt-3 mb-3">
                <div className="d-flex flex-column in gap-2">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-center" style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                <button type="submit" className="mb-3 button-log-reg">Login</button>
              </form>
              <p className="text-center">
                Do not have an account? <Link to="/signup" className="sign-link">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
