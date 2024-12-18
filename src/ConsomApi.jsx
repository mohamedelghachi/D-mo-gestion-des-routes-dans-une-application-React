import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ConsomApi.css";

function ConsomApi() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <h3>liste utilisateurs</h3>
      <div>
        <h1>nombre d'utilisateurs: {users.length}</h1>
        {users.map((user) => {
          return (
            <div className="child" key={user.id}>
              <h3 style={{ color: "rgb(92, 62, 3)" }}>
                nom:
                {user.name} {user.username}
              </h3>
              <p>email:{user.email}</p>
              <p>
                {" "}
                ville:{user.address.city}
                rue:{user.address.street}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ConsomApi;
