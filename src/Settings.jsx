import React from "react";
import { useLocation } from "react-router-dom";

function Settings() {
  const location = useLocation();
  return (
    <>
      <div>Settings  </div>
      <div>come from : {location.state?.from || "Unknown"}</div>
    </>
  );
}

export default Settings;
