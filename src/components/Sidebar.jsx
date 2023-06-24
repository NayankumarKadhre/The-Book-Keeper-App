import React, { useState } from "react";
import logo from "./logo.png";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div>
        {/* Icon div */}
        <div>
          <i
            className="fa-sharp fa-solid fa-bookmark fa-2xl"
            onClick={toggleSidebar}
          ></i>
        </div>
        {/* Logo div */}
        <div className="logo-div">
          <img src={logo} alt="The-Book-Keeper" />
        </div>
        {/* Upper Link div */}
        <div className="sidebar-link">
          <p>Home</p>
          <p>Library</p>
          <p>Favorites</p>
        </div>
      </div>

      {/* Lower Link div */}
      <div className="sidebar-link lower-link">
        <p>Contacts</p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
