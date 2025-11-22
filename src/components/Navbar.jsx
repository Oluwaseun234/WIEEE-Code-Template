import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentification/AuthContext"; 
import { logout } from "../Authentification/AuthFunctions";     

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="logo">MyCoach</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user ? (
          <>
            &nbsp;
            &nbsp;
            <span className="user-email">{user.email}</span>
            <Link to="/about">Dashboard</Link>
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
