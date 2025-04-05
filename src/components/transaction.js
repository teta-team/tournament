function Transaction({ status }) {
  if (status === 0) {
    return (
      <div className="transactions">
        <h5>20000 تومان</h5>
        <p className="code">122323342234234</p>
        <p className="mode">لغو شده</p>
        <i style={{ color: "#db4b41" }} className="bi bi-x-circle"></i>
        <p>21:30</p>
        <p>1403/01/20</p>
      </div>
    );
  } else if (status === 1) {
    return (
      <div className="transactions">
        <h5>20000 تومان</h5>
        <p className="code">122323342234234</p>
        <p className="mode">واریز</p>
        <i
          style={{ color: "#41db8e" }}
          className="bi bi-arrow-down-left-circle"
        ></i>
        <p>21:30</p>
        <p>1403/01/20</p>
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="transactions">
        <h5>20000 تومان</h5>
        <p className="code">122323342234234</p>
        <p className="mode">برداشت</p>
        <i
          style={{ color: "#e0b342" }}
          className="bi bi-arrow-up-right-circle"
        ></i>
        <p>21:30</p>
        <p>1403/01/20</p>
      </div>
    );
  } else if (status === 3) {
    return (
      <div className="transactions">
        <h5>20000 تومان</h5>
        <p className="code">122323342234234</p>
        <p className="mode">درحال تسویه</p>
        <i style={{ color: "#afdb41" }} class="bi bi-hourglass-split"></i>
        <p>21:30</p>
        <p>1403/01/20</p>
      </div>
    );
  }
}

export default Transaction;
