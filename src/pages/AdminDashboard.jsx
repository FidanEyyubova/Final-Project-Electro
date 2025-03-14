import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ setUserRole }) => {
  const navigate = useNavigate();

  const logoutAdmin = () => {
    localStorage.removeItem("userRole");
    setUserRole("");
    navigate("/admin");
  };

  return (
    <div>
      <p>Admin Dashboard</p>
      <button onClick={logoutAdmin} aria-label="Log out">
        Log out
      </button>
    </div>
  );
}

export default AdminDashboard;
