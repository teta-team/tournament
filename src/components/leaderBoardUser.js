function LeaderBoardUser({ index, image, name, rank, point, rankNum }) {
  if (index === 1) {
    return (
      <li>
        <img src="/assets/images/leaderboard/top1.png" alt="1st" />
        <img
          src={image}
          alt={name}
          className="profile"
        />
        <h3>{name}</h3>
        <h4>{rank}</h4>
        <p>{point}</p>
        <img src={`/assets/images/ranks/${rankNum}.png`} alt={rank} className="rank" />
      </li>
    );
  } else if (index === 2) {
    return (
      <li>
        <img src="/assets/images/leaderboard/top2.png" alt="1st" />
        <img src={image} alt={name} className="profile" />
        <h3>{name}</h3>
        <h4>{rank}</h4>
        <p>{point}</p>
        <img
          src={`/assets/images/ranks/${rankNum}.png`}
          alt={rank}
          className="rank"
        />
      </li>
    );
  } else if (index === 3) {
    return (
      <li>
        <img src="/assets/images/leaderboard/top3.png" alt="1st" />
        <img src={image} alt={name} className="profile" />
        <h3>{name}</h3>
        <h4>{rank}</h4>
        <p>{point}</p>
        <img
          src={`/assets/images/ranks/${rankNum}.png`}
          alt={rank}
          className="rank"
        />
      </li>
    );
  } else {
    return (
      <li>
        <p>{index}</p>
        <img src={image} alt={name} className="profile" />
        <h3>{name}</h3>
        <h4>{rank}</h4>
        <p>{point}</p>
        <img
          src={`/assets/images/ranks/${rankNum}.png`}
          alt={rank}
          className="rank"
        />
      </li>
    );
  }
}

export default LeaderBoardUser;
