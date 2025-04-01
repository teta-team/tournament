import { Link } from "react-router-dom"

function DashboardRoom({image, name, }) {
  return (
    <div className="room">
      <div>
        <h5>روم هر کیل 5000 تومان</h5>
        <p>22:00</p>
      </div>
      <Link to="">مشاهده</Link>
    </div>
  );
}

export default DashboardRoom