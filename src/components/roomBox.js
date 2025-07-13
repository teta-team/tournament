import BrSquad from "./roomsBanner/brsquad";

function RoomBox({ mode, name, players, prize, winners, time, date, price}) {
  if(mode === 0) {
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
  } else if(mode=== 1) {
    return (
      <div className="card">
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/banners/banner.webp`}
            alt={name}
          />
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
