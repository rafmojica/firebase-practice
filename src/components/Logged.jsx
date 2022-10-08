import React from "react";

const Logged = ({ logout }) => {
  return (
    <>
      <div className="logged-in">
        <h1 className="logged__title">Congrats! You're logged in.</h1>
        <figure className="img__wrapper">
          <img
            src="https://media.tenor.com/GIVLitDIxr8AAAAM/breaking-bad-walter-white.gif"
            alt=""
          />
        </figure>
        <button onClick={logout} className="logout btn">Log Out</button>
      </div>
    </>
  );
};

export default Logged;
