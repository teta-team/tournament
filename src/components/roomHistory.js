function RoomHistory({ status, mode }) {
  if (status === 0) {
    return (
      <div
        style={{ backgroundColor: "rgb(224 179 66 / 70%)" }}
        className="room"
      >
        <h4>روم هر کیل 5000 تومان</h4>
        <p className="status">ای بابا یادت رفت تو روم شرکت کنی!</p>
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
          <h4>روم هر کیل 5000 تومان</h4>
          <p className="status">عیب نداره دفعه بعد بیشتر تلاش کن.</p>
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
          <h4>روم هر کیل 5000 تومان</h4>
          <p className="status">ایول بهت همینجوری ادامه بده.</p>
          <i class="bi bi-trophy"></i>
          <p>20:40</p>
          <p>1404/01/20</p>
        </div>
      );
    }
  }
}

export default RoomHistory;
