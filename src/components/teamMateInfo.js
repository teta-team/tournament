function TeamMateInfo() {
  function Close() {
    document.getElementById("teammate-info").style.display = "none";
  }
  return (
    <div className="popover" id="teammate-info">
      <div className="box">
        <div className="header">
          <button onClick={Close}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="contents">
          
        </div>
      </div>
    </div>
  );
}

export default TeamMateInfo;
