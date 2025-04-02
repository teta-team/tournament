import { Link } from "react-router-dom"

function DashboardRoom({ name, time }) {
  return (
    <div className="room">
      <div>
        <h5>{name}</h5>
        <p>{time}</p>
      </div>
      <Link to="">مشاهده</Link>
    </div>
  );
}

export default DashboardRoom