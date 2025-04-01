import { Link } from "react-router-dom";
import NotifBox from "../../components/notifBox";

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
        <ul>
          <NotifBox
            status={0}
            title="روم هر کیل 5000 تومن نیم ساعت دیگه شروع میشه"
            time="1404/01/12 21:30"
          />
          <NotifBox
            status={1}
            user="Ali"
            team="jdfdsf"
            time="1404/01/11 18:16"
          />
        </ul>
      </div>

      <div className="rank">
        <div className="header">
          <i class="bi bi-trophy"></i>
          <h2>رنک من</h2>
        </div>
        <div className="box">
          <img src="/assets/images/ranks/1.png" alt="" />
          <h3>Elite</h3>
          <p>130/250</p>
          <div className="fill-box">
            <div className="fill"></div>
          </div>
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

      <div className="status">
        <div className="header">
          <i class="bi bi-bar-chart"></i>
          <h2>آمار من</h2>
        </div>
        <div className="line">
          <div className="box">
            <h5>برد بتل</h5>
            <p>1</p>
          </div>
          <div className="box">
            <h5>برد مولتی</h5>
            <p>0</p>
          </div>
          <div className="box">
            <h5>کل برد ها</h5>
            <p>1</p>
          </div>
          <div className="box">
            <h5>کل روم ها</h5>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
