function LastWinners({ image, name, price }) {
  return (
    <div className="winner-box d-flex row align-items-center">
      <img src={image} alt={name} />
      <div className="d-flex column justify-content-between">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default LastWinners;
