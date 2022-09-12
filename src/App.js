import "./App.css";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./nav/navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Skill from "./pages/skill";
import Education from "./pages/education";
import Contact from "./pages/contact";
import Todo from "./pages/todo";
import Login from "./pages/login";
import { Counter } from "./redux/features/counter/Counter";

function App() {
  const darkToggle = useSelector((state) => state.darkToggle.value);
  return (
    <div className={`${darkToggle && "dark"}`}>
      <div className="flex px-0 sm:px-24 md:px-32 lg:px-40 xl:px-52 dark:bg-slate-900 bg-white h-full  ">
        <BrowserRouter>
          <Navbar />
          <div className="block dark:bg-slate-900 bg-white sm:border-x-2 sm:border-gray-500 w-full sm:ml-44 min-h-full pb-14" >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/skill" element={<Skill/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
