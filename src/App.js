import "./App.css";
// import { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  // MemoryRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Information from "./Pages/Information";
import Profile from "./Pages/Profile";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Todo from "./Pages/Todo";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
// import ProfileHeader from "./Components/ProfileHeader";
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
              <Route path="/info" element={<Information />}>
                <Route path="profile" element={<Profile />} />
                <Route path="skill" element={<Skill />} />
                <Route path="education" element={<Education />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              {/* <Route path="/test" element={<ProfileHeader/>} /> */}
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
