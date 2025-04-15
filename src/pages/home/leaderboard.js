import LeaderBoardUser from "../../components/leaderBoardUser"

function LeaderBoard() {
  return (
    <div className="leaderboard-page">
      <div className="container">
        <img src="/assets/images/leaderboard/leaderboard.png" alt="" className="title" />
        <ul>
          <LeaderBoardUser
            index={1}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            name="Amir_1234dsf"
            point={3246}
            rank="Legend"
            rankNum={8}
          />
          <LeaderBoardUser
            index={2}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            name="Amir_1234dsf"
            point={2878}
            rank="Legend"
            rankNum={7}
          />
          <LeaderBoardUser
            index={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            name="Amir_1234dsf"
            point={2749}
            rank="Legend"
            rankNum={6}
          />
          <LeaderBoardUser
            index={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            name="Amir_1234dsf"
            point={2249}
            rank="Legend"
            rankNum={5}
          />
          <LeaderBoardUser
            index={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
            name="Amir_1234dsf"
            point={1849}
            rank="Legend"
            rankNum={4}
          />
          <div className="my-score">
            <p>6</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
              alt=""
              className="profile"
            />
            <h3>Amir_1234dsf</h3>
            <h4>Elite</h4>
            <p>129</p>
            <img src="/assets/images/ranks/1.png" alt="" className="rank" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoard