import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import NavbarButton from "../NavbarButton";
import './index.css'

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the collected data (username, email, and password)
    console.log("Submitted:", username, email, password);
  };

  return (
    <div ClassName="formSize">
    <form onSubmit={handleSubmit}> 
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
      />
      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;
