function Settings() {
  return (
    <div className="settings">
      <div className="line">
        <div className="user-name">
          <div className="title">
            <i class="bi bi-person"></i>
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
            <i class="bi bi-lock"></i>
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
            <i class="bi bi-image"></i>
            <h2>تغییر عکس پروفایل</h2>
          </div>
          <input type="file" />
          <button>ثبت پروفایل جدید</button>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
}

export default Settings;
