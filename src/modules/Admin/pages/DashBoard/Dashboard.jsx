import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate()
const handleLogOut = ()=>{
    
    navigate('/admin/login')
}

  return (

    
    <>
      <div>Dashboard</div>
      <button onClick={handleLogOut}>exit</button>
    </>
  );
};

export default Dashboard;
