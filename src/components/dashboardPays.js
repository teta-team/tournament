function DashboardPays({ status }) {
  if (status === 0) {
    return (
      <div className="transactions">
        <i style={{ color: "#db4b41" }} class="bi bi-x-circle"></i>
        <h5>20000 تومان</h5>
        <p>1403/01/20</p>
      </div>
    );
  } else if (status === 1) {
    return (
      <div className="transactions">
        <i
          style={{ color: "#41db8e" }}
          class="bi bi-arrow-down-left-circle"
        ></i>
        <h5>20000 تومان</h5>
        <p>1403/01/20</p>
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="transactions">
        <i style={{ color: "#e0b342" }} class="bi bi-arrow-up-right-circle"></i>
        <h5>20000 تومان</h5>
        <p>1403/01/20</p>
      </div>
    );
  }
}

export default DashboardPays;
