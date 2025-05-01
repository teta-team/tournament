function CreateTeam() {
  function Close() {
    document.getElementById("create-team").style.display = "none";
  }
  return (
    <div className="popover" id="create-team">
      <div className="box">
        <div className="header">
          <button onClick={Close}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="contents">
          <form>
            <input type="text" placeholder="نام تیم رو وارد کن..." required />
            <button>ساخت تیم</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
