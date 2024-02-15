import React, { useState } from "react";
import axios from "axios";
// import "./App.css";

function App() {
  const [formData, setFormData] = useState({});
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", formData)
      .then((res) => {
        console.log(res);
        alert("data lag gya ");
      })
      .catch((e) => {
        console.log(e);
        alert("data ke lag gye ");
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
    </>
  );
}

export default App;
