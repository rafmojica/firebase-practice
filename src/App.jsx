import React, { useState } from "react";
import "./App.css";
import { auth } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Logged from "./components/Logged";

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setTimeout(() => {
      if (user) {
        setUser(user);
        setLogged(true);
      } else {
        setUser({});
        setLogged(false);
      }
    }, 10);
  });

  function registerUser(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Success! Created new account.");
      })
      .catch((e) => {
        const errorCode = e.code;
        if (errorCode === "auth/email-already-in-use") {
          alert("Failed, email is already registered!");
        }
      });
  }

  function loginUser(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser(user);
        setLogged(true);
        alert("Success! Logged in.");
      })
      .catch((e) => {
        const errorCode = e.code;
        if (errorCode === "auth/user-not-found") {
          alert("Failed, account is not found!");
        } else if (errorCode === "auth/wrong-password") {
          alert("Failed, wrong password!");
        }
      });
  }

  function logout() {
    signOut(auth);
    setLogged(false);
    setUser({});
  }

  function openModal() {
    setModal(true);
  }

  return (
    <>
      <section id="landing">
        <Nav user={user} openModal={openModal} logout={logout} />
        {logged ? (
          <Logged logout={logout} />
        ) : (
          modal && (
            <Modal
              auth={auth}
              registerUser={registerUser}
              loginUser={loginUser}
            />
          )
        )}
      </section>
    </>
  );
}

export default App;
