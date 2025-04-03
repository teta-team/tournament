function NotifBox({ status, title, time, user, team }) {
  if (status === 0) {
    return (
      <li>
        <h3>{title}</h3>
        <p>{time}</p>
      </li>
    );
  } else if (status === 1) {
    return (
      <li>
        <h3>
          {user} از شما درخواست میکند به تیم {team} بپیوندید!
        </h3>
        <div className="buttons">
          <button>قبول درخواست</button>
          <button>رد درخواست</button>
          <button>مشاهده تیم</button>
        </div>
        <p>{time}</p>
      </li>
    );
  }
}

export default NotifBox;
