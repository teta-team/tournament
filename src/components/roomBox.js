function RoomBox({ image, name, players, prize, winners, time,date, price }) {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>{players}نفر باقی مونده</h2>
      </div>
      <div className="details">
        <div className="room-details">
          <p className="price">{prize}تومان برای {winners} نفر</p>
          <p className="time">{date} ساعت {time}</p>
          <div className="empty-box" />
        </div>
        <div className="btn">
          <p>{price}تومان</p>
          <button>مشاهده</button>
        </div>
      </div>
    </div>
  );
}

export default RoomBox