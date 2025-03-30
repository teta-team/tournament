import { Link } from "react-router-dom";

function PanelMenu() {
  return (
    <header>
      <div className="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
          alt=""
        />
        <h1>امیرحسین</h1>
      </div>
      <nav>
        <Link to="">داشبورد</Link>
      </nav>
    </header>
  );
}

export default PanelMenu;
