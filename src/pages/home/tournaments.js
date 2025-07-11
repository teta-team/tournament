import RoomBox from "../../components/roomBox";

function Tournaments() {
  return (
    <div className="tournaments-page">
      <div className="container">
        <div className="classification-of-rooms">
          <div className="title">
            <h1>روم های بتل رویال</h1>
          </div>
          <div className="matchs-box">
            <ul>
              <RoomBox
                image={`${process.env.PUBLIC_URL}/assets/images/banners/banner.webp`}
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
              <RoomBox
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
              <RoomBox
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
            </ul>
          </div>
        </div>

        <div className="classification-of-rooms">
          <div className="title">
            <h1>روم های مولتی پلیر</h1>
          </div>
          <div className="matchs-box">
            <ul>
              <RoomBox
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
              <RoomBox
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
              <RoomBox
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                name="روم بتل رویال"
                players="50"
                prize="2,000,000"
                winners="3"
                time="22:00"
                date="3روز بعد"
                price="20,000"
              />
            </ul>
          </div>

          <div className="classification-of-rooms">
            <div className="title">
              <h1>روم های رایگان</h1>
            </div>
            <div className="matchs-box">
              <ul>
                <RoomBox
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                  name="روم بتل رویال"
                  players="50"
                  prize="2,000,000"
                  winners="3"
                  time="22:00"
                  date="3روز بعد"
                  price="20,000"
                />
                <RoomBox
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                  name="روم بتل رویال"
                  players="50"
                  prize="2,000,000"
                  winners="3"
                  time="22:00"
                  date="3روز بعد"
                  price="20,000"
                />
                <RoomBox
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyPC7bf8SZSvwZnEYNHUFqRiq9SaDl54dNQ&s"
                  name="روم بتل رویال"
                  players="50"
                  prize="2,000,000"
                  winners="3"
                  time="22:00"
                  date="3روز بعد"
                  price="20,000"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
