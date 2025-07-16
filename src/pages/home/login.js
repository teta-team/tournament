import { useEffect, useState } from "react";

function Login() {
  const [isMinimal, setIsMinimal] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("registerBtn");
    const mario = document.querySelector(".super-mario");

    setTimeout(() => {
      if (mario) mario.style.transform = "translateY(0)";
      if (btn) btn.style.opacity = "1";
    }, 2500);

    const handleClick = () => {
      const inputs = isMinimal
        ? [
            document.getElementById("username"),
            document.getElementById("phone"),
            document.getElementById("password"),
          ]
        : [
            document.getElementById("name"),
            document.getElementById("username"),
            document.getElementById("phone"),
            document.getElementById("email"),
            document.getElementById("password"),
            document.getElementById("conpassword"),
          ];

      const allFilled = inputs.every((input) => input?.value.trim() !== "");

      if (allFilled && mario) {
        mario.style.animation = "marioJump .5s ease";
        mario.addEventListener(
          "animationend",
          () => {
            mario.style.animation = "none";
            setTimeout(() => {
              mario.style.animation = "";
            }, 10);
          },
          { once: true }
        );
      } else {
        alert("لطفاً تمام فیلدها را پر کنید!");
      }
    };

    if (btn) {
      btn.addEventListener("click", handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleClick);
      }
    };
  }, [isMinimal]);

  const toggleForm = () => {
    setIsMinimal(!isMinimal);
  };

  return (
    <div className={`login ${isMinimal ? "minimal" : ""}`}>
      <div className="right"></div>
      <div className="mid">
        <div className="form">
          {!isMinimal ? (
            <>
              <div className="input-box">
                <input type="text" id="name" required />
                <label htmlFor="name">نام و نام خانوادگی</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="input-box">
                <input type="text" id="username" required />
                <label htmlFor="username">نام کاربری</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="input-box">
                <input type="tel" id="phone" required />
                <label htmlFor="phone">شماره تلفن</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
              <div className="input-box">
                <input type="email" id="email" required />
                <label htmlFor="email">ایمیل</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div className="input-box">
                <input type="password" id="password" required />
                <label htmlFor="password">رمز عبور</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
              <div className="input-box">
                <input type="password" id="conpassword" required />
                <label htmlFor="conpassword">تکرار رمز عبور</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
            </>
          ) : (
            <>
              <div className="input-box">
                <input type="text" id="username" required />
                <label htmlFor="username">نام کاربری</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="input-box">
                <input type="tel" id="phone" required />
                <label htmlFor="phone">شماره تلفن</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
              <div className="input-box">
                <input type="password" id="password" required />
                <label htmlFor="password">رمز عبور</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
            </>
          )}
        </div>
        <button id="registerBtn">{isMinimal ? "ورود" : "ثبت نام"}</button>
        <div className="super-mario"></div>
      </div>
      <div className="left"></div>
      <h4 className="change-form" onClick={toggleForm}>
        {isMinimal ? "حساب ندارید؟ ثبت نام کنید" : "اکانت دارید؟ وارد شوید"}
      </h4>
    </div>
  );
}

export default Login;
