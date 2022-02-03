import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 const redirect = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    redirect("/login")
  }
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/home"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={"/show"}>
            My TODo's
          </Link>
        </li>
        <li>
        <button type="button" onClick={logout} className="btn btn-secondary">Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
