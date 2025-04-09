function Streamers({ image, name }) {
  return (
    <div className="streamer">
      <div className="border">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Streamers
