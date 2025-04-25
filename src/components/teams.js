import { useEffect } from "react";

function Team() {
  useEffect(() => {
    const players = document.querySelectorAll("li p")
    players.forEach((player) => {
      if (Number(player.textContent[0]) < Number(player.textContent[2])) {
        player.style.color = "#41db8e";
      } if (
        Number(player.textContent[0]) === Number(player.textContent[2])-1
      ) {
        player.style.color = "#e0b342";
      } else if (
        Number(player.textContent[0]) === Number(player.textContent[2])
      ) {
        player.style.color = "#db4b41";
      }
    })
    
  }, [])
  return (
    <li>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV5tUbnX6wSXB8VxeVu-KWkuEltLRqGlxzQ&s"
        alt=""
      />
      <h3>matrix</h3>
      <h4>STRK-8655</h4>
      <p>2 / 4</p>
      <div className="buttons">
        <button>
          <i className="bi bi-eye"></i>
        </button>
        <button>
          <i className="bi bi-box-arrow-in-right"></i>
        </button>
      </div>
    </li>
  );
}

export default Team