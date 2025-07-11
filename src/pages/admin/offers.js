import { useEffect } from "react";
import subs from "../../data/subs.json"

function Offers() {
  const prices = [
    process.env.REACT_APP_SUB1_PRICE,
    process.env.REACT_APP_SUB2_PRICE,
    process.env.REACT_APP_SUB3_PRICE,
    process.env.REACT_APP_SUB4_PRICE,
  ];

  useEffect(() => {
    const items = document.querySelectorAll(
      ".offers .sub"
    );

    items.forEach((item, index) => {
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.animation = "faderight .5s ease";
        item.style.opacity = "1";
      }, 100 * index);
    });
  }, []);

  return (
    <div className="offers">
      {subs.map((sub, index) => (
        <div className="sub" key={index}>
          <img src={sub.image} alt={sub.name} />
          <h2>{sub.name}</h2>
          <ul>
            {sub.points.map((point, index) => (
              <li key={index}>
                <i className="bi bi-check2-square"></i>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <p>{prices[index]} تومان</p>
          <button>خرید</button>
        </div>
      ))}
    </div>
  );
}

export default Offers