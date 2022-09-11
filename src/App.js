import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./nav/navbar";
import Home from "./pages/home";
import { Counter } from "./redux/features/counter/Counter";

function App() {
  const darkToggle = useSelector((state) => state.darkToggle.value);
  return (
    <div className={`${darkToggle && "dark"}`}>
      <div className="flex px-0 sm:px-24 md:px-32 lg:px-40 xl:px-52 dark:bg-slate-900 bg-white h-full  ">
        <BrowserRouter>
          <Navbar />
          <div className="flex dark:bg-slate-900 bg-white sm:border-x-2 sm:border-gray-500 w-full h-screen" >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
