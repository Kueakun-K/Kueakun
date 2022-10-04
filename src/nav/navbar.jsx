import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUserLarge,
  faSkull,
  faGraduationCap,
  faComment,
  faTableList,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";

import { changeMode } from "../redux/reducers/switchMode";

import kueakun_b from "../img/kueakun_b.png";
import kueakun_w from "../img/kueakun_w.png";
import cat from "../img/cat.png"

const Navbar = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(sessionStorage.getItem("page") ?? "0")
  
  return (
    <div className="grid grid-cols-6 bottom-0 fixed border-t-2 sm:border-t-0 sm:divide-x-0 sm:block sm:w-52 sm:h-screen dark:bg-slate-900 bg-white  w-full">
      <div className=" hidden sm:block pt-6 mb-5">
        <img src={kueakun_b} alt="KUEAKUNB" className="dark:hidden h-16"></img>
        <img
          src={kueakun_w}
          alt="KUEAKUNW"
          className="hidden dark:block h-16"
        ></img>
      </div>
      
      <Link to="/" onClick={() => {sessionStorage.setItem("page", 0); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "0" ? "text-black dark:text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faHouseChimney} size="xl" title="Home" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Home
          </span>
        </div>
      </Link>
      <Link to="/profile" onClick={() => {sessionStorage.setItem("page", 1); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "1" ? "text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faUserLarge} size="xl" title="Profile" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Profile
          </span>
        </div>
      </Link>
      <Link to="/skill" onClick={() => {sessionStorage.setItem("page", 2); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "2" ? "text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faSkull} size="xl" title="Skill" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Skill
          </span>
        </div>
      </Link>
      <Link to="/education" className="hidden sm:block" onClick={() => {sessionStorage.setItem("page", 3); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "3" ? "text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faGraduationCap} size="xl" title="Education" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;Education
          </span>
        </div>
      </Link>
      <Link to="/contact" onClick={() => {sessionStorage.setItem("page", 4); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "4" ? "text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faComment} size="xl" title="Contact" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;Contact
          </span>
        </div>
      </Link>
      <Link to="/todo" onClick={() => {sessionStorage.setItem("page", 5); setActiveIndex(sessionStorage.getItem("page"))}}>
        <div className={`flex justify-center sm:justify-start py-4 sm:hover:pl-3 ${activeIndex === "5" ? "text-white" : "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white"}`}>
          <FontAwesomeIcon icon={faTableList} size="xl" title="Todo" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;Todo
          </span>
        </div>
      </Link>
      
      <div className="flex justify-center sm:justify-start py-4 text-black dark:text-white">
        <div className="hidden sm:flex">
          <FontAwesomeIcon
            icon={faGhost}
            flip
            style={{ animationDuration: "3s" }}
            size="xl"
            title="Ghost"
          />
          &nbsp;&nbsp;&nbsp;
          <label className="inline-flex relative items-center cursor-pointer ">
            <input
              type="checkbox"
              className=" sr-only peer"
              onClick={() => dispatch(changeMode())}
            />
            <div class="w-14 h-7 bg-gray-800 rounded-full peer peer-checked:after:translate-x-7   after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-gray-800 after:shadow-[inset_8px_0_0_0_rgba(255,255,255,1)] after:peer-checked:bg-gray-800 peer-checked:after:shadow-none  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-200"></div>
          </label>
        </div>
        <div className="sm:hidden">
          <FontAwesomeIcon
            icon={faGhost}
            flip
            style={{ animationDuration: "3s" }}
            onClick={() => dispatch(changeMode())}
            size="xl"
            title="Ghost"
          />
        </div>
      </div>
      <div className="hidden sm:flex justify-center mt-20  p-3 ">
        <Link to="/login">
        <img src={cat} alt="cat" className="w-12 h-12 rounded-full"></img>
        </Link>
        <div className=" pl-2">
        <span className="text-gray-800 dark:text-gray-100">Kueakun-K</span>
        <br/>
        <span className="text-gray-500">@63010095</span>
        </div>
        
      </div>
    </div>
  );
};
export default Navbar;
