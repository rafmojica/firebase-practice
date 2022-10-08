import React from "react";

const Nav = ({ user, openModal, logout }) => {
  return (
    <>
      <nav>
        <div className="title__wrapper">
          <h1 className="title">Firebase Practice</h1>
        </div>
        <div className="register__login--wrapper">
          {user.email ? (
            <button onClick={logout} className="profile">{user.email[0].toUpperCase()}</button>
          ) : (
            <>
              <button onClick={openModal} className="btn login">
                Login
              </button>
              <button onClick={openModal} className="btn register">
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
