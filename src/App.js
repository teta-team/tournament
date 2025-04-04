import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Main from "./pages/layouts/main";
import Home from "./pages/home/home";
import Panel from "./pages/layouts/panel";
import Dashboard from "./pages/admin/dashboard";
import Teams from "./pages/admin/teams";
import Transactions from "./pages/admin/transactions";
import History from "./pages/admin/history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/panel" element={<Panel />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Teams />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="history" element={<History />} />
          <Route path="offers" element={<Teams />} />
          <Route path="settings" element={<Teams />} />
        </Route>
        {/* <Route path="/*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
