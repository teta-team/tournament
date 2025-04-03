import TeamPlayer from "../../components/teamPlayer";

function Teams() {
  return (
    <div className="team">
      <div className="buttons">
        <button>جستوجوی تیم</button>
        <button>ساخت تیم</button>
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
          <h3>fdsfs</h3>
        </div>

        <div className="status">
          <div className="header">
            <i className="bi bi-trophy"></i>
            <h2>رنک تیم من</h2>
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

        <div className="rank">
          <div className="header">
            <i className="bi bi-trophy"></i>
            <h2>رنک تیم من</h2>
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

        <div className="players">
          <ul>
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teams;
