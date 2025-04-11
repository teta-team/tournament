function Settings() {
  return (
    <div className="settings">
      <div className="line">
        <div className="user-name">
          <div className="title">
            <i className="bi bi-person"></i>
            <h2>تغییر نام کاربری</h2>
          </div>
          <div className="old-name">
            <h3>نام کاربری فعلی:</h3>
            <h4>Amir_1234dsf</h4>
          </div>
          <div className="new-name">
            <h3>نام کاربری جدید:</h3>
            <input
              type="text"
              placeholder="اسم جدیدت رو بزن..."
              required
              maxLength={15}
            />
          </div>
          <button>ثبت اسم جدید</button>
        </div>

        <div className="password">
          <div className="title">
            <i className="bi bi-lock"></i>
            <h2>تغییر رمز عبور</h2>
          </div>
          <div className="old-password">
            <h3>رمز عبور فعلی:</h3>
            <input
              type="password"
              placeholder="رمز عبور الانت رو بزن..."
              required
            />
          </div>
          <div className="new-password">
            <h3>نام کاربری جدید:</h3>
            <input
              type="password"
              placeholder="رمز عبور جدیدت رو بزن..."
              required
            />
          </div>
          <button>ثبت رمز عبور جدید</button>
        </div>
        <div className="profile">
          <div className="title">
            <i className="bi bi-image"></i>
            <h2>تغییر عکس پروفایل</h2>
          </div>
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
              alt=""
            />
            <button className="edit">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="line">
        <div className="rules">
          <div className="title">
            <i className="bi bi-book"></i>
            <h2>قوانین سایت</h2>
          </div>
          <a href="/assets/documents/قوانین.pdf" download>
            <i className="bi bi-download"></i>
            <p>دانلود قوانین سایت</p>
          </a>
          <a
            href="https://t.me/ir_tournament_toturial"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-telegram"></i>
            <p>آموزش شرکت در مسابقات</p>
          </a>
        </div>

        <div className="buttons">
          <button>درخواست استریمر</button>
          <button>خروج از حساب کاربری</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
