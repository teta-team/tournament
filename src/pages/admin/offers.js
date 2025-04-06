import subs from "../../data/subs.json"

function Offers() {
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
          <p>{sub.price} تومان</p>
          <button>خرید</button>
        </div>
      ))}
    </div>
  );
}

export default Offers