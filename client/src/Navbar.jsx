import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Rybakina Career Tracker
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Почетна
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/matches">
                Мечеви
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/stats">
                Статистика
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/external-news">
                Новости
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="btn btn-success ms-lg-3" to="/login">
                Најава
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;