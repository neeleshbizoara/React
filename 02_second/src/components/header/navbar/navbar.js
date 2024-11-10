import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <nav className="p-4 m-4">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">Cart Item</Link>
      <Link to="/grocery">Grocery Item</Link>
      {/* <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact Us</a>
      <a href="#">Cart Items</a> */}
      <button
        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
      >
        {btnName}
      </button>
    </nav>
  );
};

export default NavBar;
