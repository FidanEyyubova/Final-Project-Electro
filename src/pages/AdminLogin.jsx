import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const AdminLogin = ({ setUserRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 70);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const adminEmail = "adminelectro@gmail.com";
  const adminPassword = "electro0504";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (email === adminEmail && password === adminPassword) {
      console.log("Admin login successful");
      localStorage.setItem("userRole", "admin");
      navigate("/admin-dashboard");
      setUserRole("admin");
      return;
    }
    setError("Invalid email or password.");
    navigate("/admin");
  };
  

  return (
    <div className="login-user admin py-5">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className="row middle g-0 pt-4 d-flex justify-content-center align-items-center"
          data-aos="fade-right"
        >
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
              <div className="header">
                <h2 className="pt-3">Admin Login</h2>
              </div>
              <form
                className="d-flex flex-column gap-4 mt-3 mb-3"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-column gap-2">
                  <label>Email address</label>
                  <div className="input-group flex-nowrap pass">
                
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pass"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <label>Password</label>
                  </div>
                  <div className="input-group flex-nowrap pass">
                  
                    <input
                      type="password"
                      placeholder="Your password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pass"
                    />
                   
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-center">
                  <button type="submit" className="mb-3 mt-3 button-log-reg">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
