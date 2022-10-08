import React, { useState, useEffect } from "react";

const Modal = ({ auth, registerUser, loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailAndPassword = email && password;

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setEmail(email);
    }, 2000);

    return () => clearTimeout(delayFn);
  }, [email]);

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setPassword(password);
    }, 1500);

    return () => clearTimeout(delayFn);
  }, [password]);

  function register() {
    emailAndPassword
      ? registerUser(auth, email, password)
      : alert("Failed, please provide an email or password.");
  }

  function login() {
    emailAndPassword
      ? loginUser(auth, email, password)
      : alert("Failed, please provide email or password.");
  }

  return (
    <div className="modal__wrapper">
      <div className="modal">
        <h2 className="modal__title">Login / Register</h2>
        <div className="email">
          <h4 className="modal__input--title">Email Address</h4>
          <input
            type="email"
            className="input__email modal__input"
            placeholder="example@email.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="password">
          <h4 className="modal__input--title">Password</h4>
          <input
            type="password"
            className="input__password modal__input"
            placeholder="********"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="button__wrapper">
          <button onClick={() => login()} className="input__submit btn">
            Login
          </button>
          <button onClick={() => register()} className="input__submit btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
