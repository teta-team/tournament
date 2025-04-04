function TeamHistory({index, name, time}) {
  return (
    <div className="room">
      <p>{index}</p>
      <h4>{name}</h4>
      <h5>{time}</h5>
    </div>
  );
}

export default TeamHistory;
