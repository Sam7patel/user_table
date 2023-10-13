import React, { useEffect, useState } from "react";
import Axios from "axios";

const API = "https://dummyjson.com/users";

const UserTableRow = ({ user }) => {
  const userRowStyle = {
    borderBottom: "1px solid #ccc",
    backgroundColor: "#000", // Background color is black
    color: "#fff", // Text color is white
    padding: "10px",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return (
    <tr style={userRowStyle}>
      <td>{user.id}</td>
      <td>
        <img src={user.image} alt="Profile pic" style={imgStyle} />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.domain}</td>
      <td>{user.ip}</td>
      <td>{user.university}</td>
    </tr>
  );
};

function DummyData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(API)
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data.users);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main style={{ marginTop: "8px", padding: "8px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
        Dummy Data
      </h1>
      <div style={{ overflowX: "auto", padding: "8px" }}>
        <table style={{ width: "100%", fontSize: "14px", color: "#fff" }}>
          <thead
            style={{
              fontSize: "12px",
              backgroundColor: "#000", // Background color is black
              color: "#fff", // Text color is white
              textTransform: "uppercase",
            }}
          >
            <tr>
              <th style={{ padding: "10px" }}>S. No</th>
              <th style={{ padding: "10px" }}>Profile Pic</th>
              <th style={{ padding: "10px" }}>First Name</th>
              <th style={{ padding: "10px" }}>Last Name</th>
              <th style={{ padding: "10px" }}>Gender</th>
              <th style={{ padding: "10px" }}>E-mail</th>
              <th style={{ padding: "10px" }}>Username</th>
              <th style={{ padding: "10px" }}>Domain</th>
              <th style={{ padding: "10px" }}>IP</th>
              <th style={{ padding: "10px" }}>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default DummyData;
