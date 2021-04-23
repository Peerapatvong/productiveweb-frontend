import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handlersignup = () => history.push("/signup");
  const handlerlogin = () => history.push("/login");
  const handlerallconsultant = () => history.push("/allconsultant");
  const handlercart = () => history.push("/cart");

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="https://picsum.photos/60" alt="logo" />
        </div>
        <button className="navbarheader">Task</button>
        <button className="navbarheader" onClick={handlerallconsultant}>
          Consultant
        </button>
        <button className="navbarheader" onClick={handlercart}>
          Cart
        </button>

        <div className="into">
          <a href="/signup" className="navbar-register" onClick={handlersignup}>
            signup
          </a>
          <h3 className="navbar-register">|</h3>
          <a href="/login" className="navbar-register" onClick={handlerlogin}>
            login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
