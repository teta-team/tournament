function LastPays({ image, name, price, roomName }) {
  return (
    <div className="pays-box b">
      <img src={image} alt={name} />
      <div className="d-flex column justify-content-between">
        <h3>{price} تومان برای {name}</h3>
        <p>برای برنده شدن در {roomName}</p>
      </div>
    </div>
  );
}

export default LastPays;
