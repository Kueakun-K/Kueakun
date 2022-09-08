import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./nav/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="flex">
      <div className="w-1/12"></div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
