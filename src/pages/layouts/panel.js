import { Outlet } from "react-router-dom";
import PanelMenu from "../../components/panelMenu";

function Panel() {
  return (
    <div className="panel">
      <PanelMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Panel;
