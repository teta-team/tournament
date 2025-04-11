import { Outlet } from "react-router-dom";
import Menu from "../../components/menu";
import Footer from "../../components/footer";

function Main() {
  return (
    <div className="main">
      <header>
        <div className="container">
          <Menu />
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
