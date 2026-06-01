import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Rybakina Career Tracker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/matches">Matches</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/stats">Statistics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/external-news">News</NavLink></li>
            {user?.role === "admin" && (
              <li className="nav-item"><NavLink className="btn btn-outline-success ms-lg-3" to="/add-match">Add Match</NavLink></li>
            )}
            {user ? (
              <li className="nav-item"><button className="btn btn-success ms-lg-3" onClick={handleLogout}>Logout</button></li>
            ) : (
              <li className="nav-item"><NavLink className="btn btn-success ms-lg-3" to="/login">Login</NavLink></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
