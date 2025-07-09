function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
            <div className="board">
              <div className="right">
                <div className="up">
                  <img src="" alt="nike" />
                  <form action="#">
                    <div className="input-box">
                      <input type="text" id="Username" required />
                      <label for="Username">نام کاربری:</label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                    </div>
                    <div className="input-box">
                      <input type="password" id="password" required />
                      <label for="password">رمز عبور:</label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-key-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </div>
                    <div className="texts">
                      <h4>رمز را فراموش کرده ام؟</h4>
                      <button>ورود</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="left">
                <div className="right">
                  <button id="btn-top">ورود</button>
                  <button id="btn-botton">ثبت نام</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Login;
