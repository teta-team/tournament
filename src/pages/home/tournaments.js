import { useRef, useState } from "react";
import RoomBox from "../../components/roomBox";

function Tournaments() {
  const matchsBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - matchsBoxRef.current.offsetLeft);
    setScrollLeft(matchsBoxRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - matchsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2; // سرعت حرکت را می‌توانید تنظیم کنید
    matchsBoxRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="tournaments-page">
      <div className="container">
        <div className="classification-of-rooms">
          <div className="title">
            <h1>روم های بتل رویال</h1>
          </div>
          <div
            className="matchs-box"
            ref={matchsBoxRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
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
