function StreamerForm() {
  function Close() {
    document.getElementById("streamer-form").style.display = "none";
  }
  return (
    <div className="popover" id="streamer-form">
      <div className="box">
        <div className="header">
          <button onClick={Close}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="contents">
          <form>
            <div className="row">
              <input type="text" placeholder="نام" />
              <input type="text" placeholder="نام خانوادگی" />
            </div>
            <div className="socials">
              <input type="text" placeholder="لینک چنل آپارات" />
              <input type="text" placeholder="لینک چنل یوتیوب" />
              <input type="text" placeholder="لینک چنل توییچ" />
              <label for="checkbox">
                <input type="checkbox" id="checkbox" /> با{" "}
                <a href="/assets/documents/قوانین.pdf" download>
                  قوانین استریمر ها
                </a>{" "}
                موافقم.
              </label>
            </div>
            <button>ارسال درخواست</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StreamerForm;
