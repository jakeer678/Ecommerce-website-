import { Button } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch(
      "https://login-782e7-default-rtdb.firebaseio.com/userData/userData.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "contet-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    navigate("/");
    console.log(data);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="login">
        <div className="container">
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
              submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
