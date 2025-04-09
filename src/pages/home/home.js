import { Link } from "react-router-dom";
import LastPays from "../../components/lastPays";
import RoomBox from "../../components/roomBox";
import Streamers from "../../components/streamers";

function Home() {
  return (
    <>
      <div className="welcome">
        <div className="container">
          <div className="right">
            <h1>به سایت ایران تورنومنت خوش آمدید</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="left d-flex row justify-content-evenly align-items-center">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>

      <div className="last-pays">
        <div className="container d-flex column">
          <div className="title">
            <h2>آخرین پرداختی های جوایز</h2>
            <div className="under-line"></div>
          </div>
          <div className="d-flex row justify-content-between align-items-center p-3">
            <LastPays
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
              name="aria_kg"
              price="40000"
              roomName="هر کیل 5000 تومن"
            />
            <LastPays
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
              name="aria_kg"
              price="40000"
              roomName="هر کیل 5000 تومن"
            />
            <LastPays
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
              name="aria_kg"
              price="40000"
              roomName="هر کیل 5000 تومن"
            />
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="container d-flex column">
          <div className="title">
            <h2>روم ها</h2>
            <div className="under-line"></div>
          </div>
          <div className="Category d-flex row justify-content-center">
            <Link to="">Battleroyale</Link>
            <Link to="">Multi Player</Link>
            <Link to="">روم های ویژه</Link>
            <Link to="">روم رایگان</Link>
            <Link to="">دوئل</Link>
          </div>
        </div>
      </div>

      <div className="rooms">
        <div className="container">
          <div className="title">
            <h2>روم ها</h2>
            <div className="under-line"></div>
          </div>
          <div className="rooms-row">
            <RoomBox
              image=""
              name="روم بتل رویال"
              players="50"
              prize="2,000,000"
              winners="3"
              time="22:00"
              date="3روز بعد"
              price="20,000"
            />
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div className="title">
            <h2>درباره ی ما</h2>
            <div className="under-line"></div>
          </div>
          <div className="box">
            <div className="video">
              <video src="#" controls />
            </div>
            <div className="text">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="streamers-box">
        <div className="container">
          <div className="title">
            <h2>روم ها</h2>
            <div className="under-line"></div>
          </div>
          <div className="streamers">
            <Streamers 
            image=""
            name="امیر حسین"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
