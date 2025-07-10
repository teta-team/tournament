import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Main from "./pages/layouts/main";
import Home from "./pages/home/home";
import Panel from "./pages/layouts/panel";
import Dashboard from "./pages/admin/dashboard";
import Teams from "./pages/admin/teams";
import Transactions from "./pages/admin/transactions";
import History from "./pages/admin/history";
import Offers from "./pages/admin/offers";
import Settings from "./pages/admin/settings";
import Tournaments from "./pages/home/tournaments";
import LeaderBoard from "./pages/home/leaderboard";
import Login from "./pages/home/login";
import Learn from "./pages/home/learn";
import Streamers from "./pages/home/streamers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="streamers" element={<Streamers />} />
          <Route path="learn" element={<Learn />} />
        </Route>

        <Route path="login" element={<Login />} />

        <Route path="/panel" element={<Panel />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Teams />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="history" element={<History />} />
          <Route path="offers" element={<Offers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* <Route path="/*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
