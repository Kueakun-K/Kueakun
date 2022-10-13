import "./App.css";
// import { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  // MemoryRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Todo from "./Components/Todo";
import Login from "./Components/Login";
import Error from "./Components/Error";
import { Counter } from "./Services/features/counter/Counter";

function App() {
  const darkToggle = useSelector((state) => state.darkToggle.value);

  return (
    <div className={`${darkToggle && "dark"}`}>
      <div className="flex sm:pr-12 sm:pl-1 md:pr-20 md:pl-2 lg:px-40 xl:px-52 dark:bg-slate-900 bg-gray-100 min-h-screen  ">
        <BrowserRouter>
          <Navbar />
          <div className="block dark:bg-slate-900  bg-gray-100 sm:border-x-2 sm:border-gray-500 w-full sm:ml-52   pb-14 sm:pb-0">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/todo" element={<Todo/>}  />
              <Route path="/login" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
