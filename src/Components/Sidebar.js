import React from 'react';
import { MdOutlineDashboard } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="container">
      <div className="logo">
        <MdOutlineDashboard className="logo-icon" />
        <span>YUVO</span>
      </div>

      <div className="menu">
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="item">
            <HiOutlineHome />
            <h3>Dashboard</h3>
          </div>
        </Link>

       
      </div>
    </div>
  )
}

export default Sidebar
