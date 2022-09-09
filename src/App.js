import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./nav/navbar";
import Home from "./pages/home";
import DarkMode from "./pages/darkmode";

function App() {
  return (
    <div className="flex">
      <div className="w-2/12"></div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/darkmode" element={<DarkMode/>} />
        </Routes>
      </BrowserRouter>
      <div className="w-2/12"></div>
    </div>
  );
}

export default App;
