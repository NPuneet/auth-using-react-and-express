import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";

function App() {
  useEffect(() => {
    loadData();
  }, []);
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState([]);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", formData)
      .then((res) => {
        console.log(res);
        loadData();
        alert("User created");
      })
      .catch((e) => {
        console.log(e);
        alert("data ke lag gye ");
      });
  };

  const loadData = () => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        setUser(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>Admin dashboard portal</h1>
      <form method="post">
        <input
          type="text"
          placeholder="Enter FName here"
          name="firstName"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter LName here"
          name="lastName"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email here"
          name="email"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />
        <button onClick={(e) => submitHandler(e)}>Add details</button>
      </form>
      <hr />
      <div>
        <h1>Records present in DB</h1>
        {user.map((data) => {
          return (
            <li key={data._id}>
              {data.firstName}-{data.lastName}-{data.email}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default App;
