import { Outlet } from "react-router-dom";
import Menu from "../../components/menu";

function Main() {
  return (
    <div className="main">
      <header>
        <div className="container">
          <Menu />
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Main;
