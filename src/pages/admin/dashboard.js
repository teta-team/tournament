function Dashboard() {
  return (
    <div className="dashboard d-flex row f-wrap">
      <div className="wallet">
        <div className="header">
          <i className="bi bi-wallet2"></i>
          <h2>کیف پول</h2>
        </div>
        <div className="amount">
          <p>0</p>
          <p>تومان</p>
        </div>
        <div className="buttons">
          <button>
            <p>واریز</p>
          </button>
          <button>
            <p>برداشت</p>
          </button>
        </div>
      </div>

      <div className="notif">
        <div className="header">
          <i class="bi bi-bell"></i>
          <h2>اعلان ها</h2>
        </div>
      </div>

      <div className="rank">
        <div className="header">
          <i class="bi bi-trophy"></i>
          <h2>رنک من</h2>
        </div>
      </div>

      <div className="frends">
        <div className="header">
          <i class="bi bi-people"></i>
          <h2>افراد تیم من</h2>
        </div>
      </div>

      <div className="joined-room">
        <div className="header">
          <i class="bi bi-calendar"></i>
          <h2>روم های شرکت کرده</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
