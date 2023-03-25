import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { contextProduct } from "../store/contextstore";
import { useNavigate } from "react-router-dom";

const LoginAuth = () => {
  const enterEmailRef = useRef();
  const enterpasswordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { LoginUserHandle } = useContext(contextProduct);
  const navigate = useNavigate();

  const switchHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = enterEmailRef.current.value;
    const enteredPassword = enterpasswordRef.current.value;
    let url;
    setIsLoading(true);
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0JHJFa7d1DS3fyQn5YitSL5b9nbwvhGE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0JHJFa7d1DS3fyQn5YitSL5b9nbwvhGE";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);

        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Login Authentication failed";
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // srtoring data in authContext
        alert("success");
        LoginUserHandle(data.idToken);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className="auth">
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" required ref={enterEmailRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your password</label>
          <input type="password" required ref={enterpasswordRef} />
        </div>
        <div className="actions">
          {!isLoading && <button>{isLogin ? "Login" : "Sign Up"}</button>}
          {isLoading && <p>sending request...</p>}

          {
            <button onClick={switchHandler}>
              {isLogin ? "create an account" : "Login with Existing account"}
            </button>
          }
        </div>
      </form>
    </section>
  );
};

export default LoginAuth;
