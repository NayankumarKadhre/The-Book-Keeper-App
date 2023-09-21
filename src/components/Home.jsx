import React, { useState } from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [list, setList] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container">
      <div className={"sidebar " + (sidebarOpen ? "open" : "closed")}>
        <div>
          <div>
            <i
              className="fa-sharp fa-solid fa-bookmark fa-2xl"
              onClick={toggleSidebar}
            ></i>
          </div>
          <div className="logo-div">
            <img src={logo} alt="The-Book-Keeper" />
          </div>
          <div className="sidebar-link">
            <NavLink to="/home">
              <p>Home</p>
            </NavLink>
            <NavLink to="/home/library">
              <p>Library</p>
            </NavLink>
            <NavLink to="/home/favorites">
              <p>Favorites</p>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-link lower-link">
          <NavLink to="/home/contact">
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="/home/logout">
            <p>Logout</p>
          </NavLink>
        </div>
      </div>
      <div></div>
      <div className="content">
        <div className="search-section">
          <div className="search">
            <SearchBar setList={setList} />
            <SearchResults list={list} />
          </div>
        </div>

        <div className="main-section">
          <Outlet key="home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
