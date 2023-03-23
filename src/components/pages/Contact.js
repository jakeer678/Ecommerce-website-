import { Button } from "@mui/material";
import React, { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  async function addloginDetails(user) {
    console.log(user);
    const response = await fetch(
      "https://login-782e7-default-rtdb.firebaseio.com//login",
      {
        mode: 'cors',
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "contet-Type": "application/json",
        },
      }
    );

    const data = response.json();
    console.log(data);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const users = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    addloginDetails(users);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="login">
        <div className="control">
          <label htmlFor="name">Name</label>
          <input type="name" ref={nameRef} />
        </div>
        <div className="control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" ref={emailRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordRef} />
        </div>
        <div className="actions">
          <Button type="submit" variant="contained" className="btn">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
