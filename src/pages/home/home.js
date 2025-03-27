import LastWinners from "../../components/winnerBox";

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

      <div className="last-winners">
        <div className="container d-flex column">
          <div className="title">
            <h2>آخرین پرداختی های جوایز</h2>
            <div className="under-line"></div>
          </div>
          <div className="d-flex row justify-content-between align-items-center p-3">
            <LastWinners
              
            />
            <LastWinners
              
            />
            <LastWinners
              
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
