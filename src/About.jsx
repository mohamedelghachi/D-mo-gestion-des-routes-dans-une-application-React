import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation()
  return (
    <>
      <div>About</div>
      <div>location {location.pathname}</div>
    </>
  );
}

export default About;
