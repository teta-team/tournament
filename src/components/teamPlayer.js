function TeamPlayer() {
  function OpenPlayerInfo() {
    document.getElementById("teammate-info").style.display = "flex";
  }
  return (
    <div className="player">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
        alt=""
      />
      <h4>Amir_1234</h4>
      <div className="buttons">
        <button onClick={OpenPlayerInfo}>
          <i className="bi bi-eye"></i>
        </button>
        <button>
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TeamPlayer