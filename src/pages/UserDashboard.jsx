import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const logoutLogin = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div>
      <p>fidan</p>
      <button onClick={logoutLogin} aria-label="Log out">salam</button>
    </div>
  );
};

export default UserDashboard;
