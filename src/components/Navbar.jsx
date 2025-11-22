import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentification/AuthContext"; 
import { logout } from "../Authentification/AuthFunctions";     

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="logo">WIEEE CODE</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">Project Page</Link>

        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
