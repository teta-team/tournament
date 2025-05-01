import Team from "./teams";

function SearchTeam() {
  function Close() {
    document.getElementById("search-team").style.display = "none";
  }

  return (
    <div className="popover" id="search-team">
      <div className="box">
        <div className="header">
          <button onClick={Close}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="contents">
          <div className="search-box">
            <input type="text" placeholder="آیدی یا اسم تیم رو بنویس..." />
            <button>
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="list">
            <ul>
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTeam;
