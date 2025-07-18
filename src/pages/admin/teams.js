import TeamHistory from "../../components/teamHistory";
import TeamPlayer from "../../components/teamPlayer";
import SearchTeam from "../../components/searchTeam";
import CreateTeam from "../../components/createTeam";
import TeamMateInfo from "../../components/teamMateInfo";

function Teams() {
    function OpenSearch() {
      document.getElementById("search-team").style.display = "flex";
    }
    function OpenCreate() {
      document.getElementById("create-team").style.display = "flex";
    }
  return (
    <div className="team">
      <SearchTeam />
      <CreateTeam />
      <TeamMateInfo />
      <div className="buttons">
        <button onClick={OpenSearch}>جستوجوی تیم</button>
        <button onClick={OpenCreate}>ساخت تیم</button>
      </div>
      <div className="title">
        <i className="bi bi-people"></i>
        <h2>تیم من</h2>
      </div>
      <div className="my-team">
        <div className="info">
          <img
            className="team-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            alt=""
          />
          <div className="text">
            <h3>fdsfs</h3>
            <p>id: STRK-8655</p>
          </div>
        </div>

        <div className="status">
          <div className="header">
            <i className="bi bi-bar-chart"></i>
            <h2>آمار تیم من</h2>
          </div>
          <div className="boxs">
            <div className="box">
              <h5>برد بتل</h5>
              <p>0</p>
            </div>
            <div className="box">
              <h5>برد مولتی</h5>
              <p>0</p>
            </div>
            <div className="box">
              <h5>کل برد ها</h5>
              <p>0</p>
            </div>
            <div className="box">
              <h5>کل روم ها</h5>
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="invite">
          <div className="header">
            <i
              style={{ fontSize: "20px", paddingTop: "5px" }}
              className="bi bi-link-45deg"
            ></i>
            <h2>کد دعوت تیم</h2>
          </div>
          <div className="box">
            <div className="link">
              <p>https://irtournament.com/teams/STRK-8655</p>
            </div>
            <button className="icon">
              <i className="bi bi-copy"></i>
            </button>
          </div>
          <p className="notic">
            برای دعوت دوستانتان به تیم خود این لینک را برای آنها ارسال کنید.
          </p>
        </div>

        <div className="players">
          <div className="header">
            <i className="bi bi-people"></i>
            <h2>افراد تیم</h2>
          </div>
          <ul>
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
          </ul>
        </div>

        <div className="team-history">
          <div className="header">
            <i
              style={{ paddingTop: "5px" }}
              className="bi bi-clock-history"
            ></i>
            <h2>تاریخچه بازی های تیم</h2>
          </div>
          <ul>
            <TeamHistory
              index={3}
              name="روم هر کیل 5000 تومان"
              time="1404/01/25"
            />
            <TeamHistory
              index={2}
              name="روم هر کیل 5000 تومان"
              time="1404/01/25"
            />
            <TeamHistory
              index={1}
              name="روم هر کیل 5000 تومان"
              time="1404/01/25"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teams;
