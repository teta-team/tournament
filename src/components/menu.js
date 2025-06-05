import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <button id="burger-btn" onClick={toggleMenu}>
        <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>
      {menuOpen && (
        <div id="burger-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            خانه
          </Link>
          <Link to="/tournaments" onClick={() => setMenuOpen(false)}>
            مسابقات
          </Link>
          <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>
            لیدربرد
          </Link>
          <Link to="/streamers" onClick={() => setMenuOpen(false)}>
            استریمر ها
          </Link>
          <Link to="/learn" onClick={() => setMenuOpen(false)}>
            آموزش
          </Link>
        </div>
      )}

      <Link to="/login" className="logo">
        <img src="/assets/images/logo.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/">خانه</Link>
        <Link to="/tournaments">مسابقات</Link>
        <Link to="/leaderboard">لیدربرد</Link>
        <Link to="/streamers">استریمر ها</Link>
        <Link to="/learn">آموزش</Link>
        <div className="line"></div>
      </nav>
      <div className="profile">
        <img src="https://openclipart.org/image/2000px/247319" alt="شیس" />
      </div>
    </div>
  );
}

export default Menu;
