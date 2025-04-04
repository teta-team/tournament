import RoomHistory from "../../components/roomHistory"

function History() {
  return (
    <div className="rooms-history">
      <ul>
        <RoomHistory status={0} mode={0} />
        <RoomHistory status={1} mode={0} />
        <RoomHistory status={1} mode={1} />
      </ul>
    </div>
  )
}

export default History