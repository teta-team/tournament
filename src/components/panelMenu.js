import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function PanelMenu() {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const navLinks = [
    {
      path: "/panel/",
      icon1: "bi-house",
      icon2: "bi-house-fill",
      text: "داشبورد",
      exact: true,
    },
    {
      path: "/panel/team",
      icon1: "bi-people",
      icon2: "bi-people-fill",
      text: "تیم من",
      exact: true,
    },
    {
      path: "/panel/transactions",
      icon1: "bi-cash",
      icon2: "bi-cash-stack",
      text: "تراکنش ها",
      exact: true,
    },
    {
      path: "/panel/history",
      icon1: "bi-clock-history",
      icon2: "bi-clock-history",
      text: "تاریخچه بازی ها",
      exact: true,
    },
    {
      path: "/panel/offers",
      icon1: "bi-star",
      icon2: "bi-star-fill",
      text: "پیشنهاد ویژه",
      exact: true,
    },
    {
      path: "/panel/settings",
      icon1: "bi-gear",
      icon2: "bi-gear-fill",
      text: "تنظیمات",
      exact: true,
    },
  ];

  useEffect(() => {
    const activeIndex = navLinks.findIndex((link) =>
      link.exact
        ? location.pathname === link.path
        : location.pathname.startsWith(link.path)
    );

    if (activeIndex !== -1) {
      setActiveLink(activeIndex);
    }
  }, [location.pathname]);

  return (
    <header>
      <div className="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
          alt=""
        />
        <h1>Amir_1234dsf</h1>
        <p>id: #JSBO4857</p>
      </div>
      <nav>
        {navLinks.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={activeLink === index ? "active" : ""}
            onClick={() => setActiveLink(index)}
          >
            <i className={`bi ${link.icon1}`}></i>
            <i className={`bi ${link.icon2}`}></i>
            <p>{link.text}</p>
            <div className="top">
              <div></div>
            </div>
            <div className="bot">
              <div></div>
            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default PanelMenu;
