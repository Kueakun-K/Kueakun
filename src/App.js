import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./nav/navbar";
import Home from "./pages/home";
import DarkMode from "./pages/darkmode";
import { Counter } from "./redux/features/counter/Counter";

function App() {
  return (
    <div className="flex px-0 sm:px-24 md:px-32 lg:px-40 xl:px-52  " >
      <BrowserRouter>
      {/* <div className="grid grid-rows-6 bottom-0 fixed sm:flex sm:w-56 sm:h-screen "> */}
      <Navbar />
      {/* </div> */}
        {/* <div className="flex w-full"> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/darkmode" element={<DarkMode/>} />
          <Route path="/counter" element={<Counter/>} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
