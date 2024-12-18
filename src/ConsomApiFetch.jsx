import React, { useState, useEffect } from "react";
import { Link, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import "./ConsomApi.css";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import NotFound from "./NotFound";
import Profile from "./Profile";

function ConsomApiFetch() {
  const isAuthentificated = false;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => {
        console.log(users);
        setUsers(users);
      });
  }, []);
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">
              {({ isActive }) => <span>{isActive ? "👉" : ""} Home</span>}
            </NavLink>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Dashboard/Settings" state={{ from: "Home" }}>
              Settings
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="main-route-place">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="settings/*" element={<Settings />} />
              <Route
                path="profile/:id"
                state={{ from: "Home" }}
                element={isAuthentificated? <Profile /> : <Navigate to="/" />}
              />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ConsomApiFetch;
