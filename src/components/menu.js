import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu d-flex row justify-content-between align-items-center">
      <div className="logo">
        <img
          src="/assets/images/logo.png"
          alt="logo"
        />
      </div>
      <nav className="d-flex row">
        <Link to="/">خانه</Link>
        <Link to="/tournaments">مسابقات</Link>
        <Link to="/winners">برندگان</Link>
        <Link to="/sponsers">اسپانسر ها</Link>
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
