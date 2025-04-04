function RoomHistory({ status, mode }) {
  if (status === 0) {
    return (
      <div
        style={{ backgroundColor: "rgb(224 179 66 / 70%)" }}
        className="room"
      >
        <p>1</p>
        <h4>روم هر کیل 5000 تومان</h4>
        <p className="status">غائب در روم</p>
        <p className="mode">از دست دادی</p>
        <i class="bi bi-emoji-dizzy"></i>
        <p>20:40</p>
        <p>1404/01/20</p>
      </div>
    );
  } else if (status === 1) {
    if (mode === 0) {
      return (
        <div
          style={{ backgroundColor: "rgb(219 75 65 / 70%)" }}
          className="room"
        >
          <p>1</p>
          <h4>روم هر کیل 5000 تومان</h4>
          <p className="status">حاضر در روم</p>
          <p className="mode">باختی</p>
          <i class="bi bi-emoji-frown"></i>
          <p>20:40</p>
          <p>1404/01/20</p>
        </div>
      );
    } else if (mode === 1) {
      return (
        <div
          style={{ backgroundColor: "rgb(67 219 143 / 70%)" }}
          className="room"
        >
          <p>1</p>
          <h4>روم هر کیل 5000 تومان</h4>
          <p className="status">حاضر در روم</p>
          <p className="mode">بردی</p>
          <i class="bi bi-trophy"></i>
          <p>20:40</p>
          <p>1404/01/20</p>
        </div>
      );
    }
  }
}

export default RoomHistory;
