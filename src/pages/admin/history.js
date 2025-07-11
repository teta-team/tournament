import { useEffect } from "react";
import RoomHistory from "../../components/roomHistory"

function History() {
  useEffect(() => {
    const items = document.querySelectorAll(".rooms-history ul .room");

    items.forEach((item, index) => {
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.animation = "fadedown .5s ease";
        item.style.opacity = "1";
      }, 100 * index);
    });
  }, []);
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