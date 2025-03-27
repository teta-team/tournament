import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Main from "./pages/layouts/main";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
