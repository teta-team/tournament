import RoomBox from "../../components/roomBox";

function Tournaments() {
  return (
    <>
      <div className="battle-royal">
        <div className="title">
          <h1>title</h1>
        </div>
        <div className="matchs-box">
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
        </div>
      </div>
    </>
  );
}

export default Tournaments