import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__logo">⚡</span>
          <span>
            Fit<strong>Studio</strong>
          </span>
        </NavLink>

        <nav className="navbar__links">
          <NavLink to="/" end className="navbar__link">
            בית
          </NavLink>
          <NavLink to="/classes" end className="navbar__link">
            שיעורי סטודיו
          </NavLink>
          <NavLink to="/classes/new" className="navbar__link">
            הוספת שיעור
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            אודות
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
