function TeamHistory({ name, time}) {
  return (
    <div className="room">
      <h4>{name}</h4>
      <h5>{time}</h5>
    </div>
  );
}

export default TeamHistory;
