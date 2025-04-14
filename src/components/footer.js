import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-menu">
        <div className="title">
          <h5>منو</h5>
          <div className="line"></div>
        </div>
        <Link to="/">
          <i className="bi bi-house"></i>خانه
        </Link>
        <Link to="/tournaments">
          <i className="bi bi-controller"></i>مسابقات
        </Link>
        <Link to="/leaderboard">
          <i className="bi bi-trophy"></i>لیدربرد
        </Link>
        <Link to="/streamer">
          <i className="bi bi-display"></i>استریمر ها
        </Link>
        <Link to="/learn">
          <i className="bi bi-journal"></i>آموزش
        </Link>
      </div>
      <div className="footer-details">
        <div className="title">
          <h5>درباره ما</h5>
          <div className="line"></div>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده.
        </p>
        <div className="social">
          <Link to="/">
            <i className="bi bi-discord"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-telegram"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-youtube"></i>
          </Link>
        </div>
        <h4>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </h4>
      </div>
      <div className="footer-nemads">
        <img
          src="https://media.mehrnews.com/d/2022/09/11/0/4277508.png?ts=1662907680964"
          alt="e-nemad"
        ></img>
        <img
          src="https://media.mehrnews.com/d/2022/09/11/0/4277508.png?ts=1662907680964"
          alt="e-nemad"
        ></img>
      </div>
    </footer>
  );
}

export default Footer;
