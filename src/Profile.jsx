import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Profile() {
  let location = useLocation();
  let {id} = useParams();
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
  ]
  return (
    <>
      <div>Profile  </div>
      <div>id :  {users.filter((item)=>item.id == id)[0].name} </div>
      <div>come from : {location.state?.from || "Unknown"}</div>
    </>
  );
}

export default Profile;
