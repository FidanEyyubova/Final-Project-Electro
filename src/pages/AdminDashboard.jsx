import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ setUserRole }) => {
  const navigate = useNavigate();


  const logoutAdmin = () => {
    localStorage.removeItem("userRole");
    setUserRole("");
    navigate("/admin");
  };

  return (
      <div className="dashboard user-dashboard">
          <div className="container-fluid">
            <div className="dashboard-head d-flex justify-content-between px-3 align-items-center pt-4">
              <h3>Admin Dashboard</h3>
              <button onClick={logoutAdmin} aria-label="Log out">
                Logout <MdLogout className="out mb-1" />
              </button>
            </div>
    
          </div>
        </div>
  );
}

export default AdminDashboard;
