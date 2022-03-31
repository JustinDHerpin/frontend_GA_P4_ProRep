import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
// import Nav

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <img
        className="login-logo mb-3 mt-3"
        src={require("../images/proRepSampleWix.jpeg")}
        alt="ProRep Logo Icon"
      />
      {/* <div>
        <Link to="/">Add a Course</Link>
      </div> */}

      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/">
                <FaSignInAlt /> Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
