import BrDuo from "./roomsBanner/brduo";
import BrSquad from "./roomsBanner/brsquad";
import Duel from "./roomsBanner/duel";
import Free from "./roomsBanner/free";

function RoomBox({ mode, name, players, prize, winners, time, date, price}) {
  if (mode === 0) {
    return (
      <div className="card">
        <div className="img">
          <BrSquad />
          <h1>{name}</h1>
          <h2>{players} نفر باقی مونده</h2>
        </div>
        <div className="details">
          <div className="room-details">
            <p className="price">
              <i className="bi bi-trophy-fill"></i>
              {prize} تومان جایزه نقدی برای {winners} نفر
            </p>
            <div className="time">
              <i className="bi bi-calendar4-week"></i>
              <p>
                {date} ساعت {time}
              </p>
            </div>
            <div className="empty-box" />
          </div>
          <div className="btn">
            <p>{price} تومان</p>
            <button>مشاهده</button>
          </div>
        </div>
      </div>
    );
  } else if (mode === 1) {
    return (
      <div className="card">
        <div className="img">
          <BrDuo />
          <h1>{name}</h1>
          <h2>{players} نفر باقی مونده</h2>
        </div>
        <div className="details">
          <div className="room-details">
            <p className="price">
              <i className="bi bi-trophy-fill"></i>
              {prize} تومان جایزه نقدی برای {winners} نفر
            </p>
            <div className="time">
              <i className="bi bi-calendar4-week"></i>
              <p>
                {date} ساعت {time}
              </p>
            </div>
            <div className="empty-box" />
          </div>
          <div className="btn">
            <p>{price} تومان</p>
            <button>مشاهده</button>
          </div>
        </div>
      </div>
    );
  } else if (mode === 2) {
    return (
      <div className="card">
        <div className="img">
          <Duel />
          <h1>{name}</h1>
          <h2>{players} نفر باقی مونده</h2>
        </div>
        <div className="details">
          <div className="room-details">
            <p className="price">
              <i className="bi bi-trophy-fill"></i>
              {prize} تومان جایزه نقدی برای {winners} نفر
            </p>
            <div className="time">
              <i className="bi bi-calendar4-week"></i>
              <p>
                {date} ساعت {time}
              </p>
            </div>
            <div className="empty-box" />
          </div>
          <div className="btn">
            <p>{price} تومان</p>
            <button>مشاهده</button>
          </div>
        </div>
      </div>
    );
  } else if (mode === 3) {
    return (
      <div className="card">
        <div className="img">
          <Free />
          <h1>{name}</h1>
          <h2>{players} نفر باقی مونده</h2>
        </div>
        <div className="details">
          <div className="room-details">
            <p className="price">
              <i className="bi bi-trophy-fill"></i>
              {prize} تومان جایزه نقدی برای {winners} نفر
            </p>
            <div className="time">
              <i className="bi bi-calendar4-week"></i>
              <p>
                {date} ساعت {time}
              </p>
            </div>
            <div className="empty-box" />
          </div>
          <div className="btn">
            <p>{price} تومان</p>
            <button>مشاهده</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomBox;
