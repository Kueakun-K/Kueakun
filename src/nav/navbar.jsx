import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  // const darkToggle = useSelector((state) => state.darkToggle.value);
  const dispatch = useDispatch();

  return (
    // <div className={`${darkToggle && "dark"}`}>
    <div className="grid grid-cols-6 bottom-0 fixed divide-x sm:divide-x-0 sm:static sm:block sm:w-56 sm:h-screen dark:bg-gray-800 bg-white  w-full">
      <div className=" hidden sm:block pt-6 mb-5">
        <img src={kueakun_b} alt="KUEAKUNB" className="dark:hidden h-16"></img>
        <img
          src={kueakun_w}
          alt="KUEAKUNW"
          className="hidden dark:block h-16"
        ></img>
      </div>
      <Link to="/">
        <div className="flex justify-center sm:justify-start py-4 sm:hover:bg-orange-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faHouseChimney} size="xl" title="Home" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Home
          </span>
        </div>
      </Link>
      <Link to="/profile">
        <div className="flex justify-center sm:justify-start py-4 sm:hover:bg-orange-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faUserLarge} size="xl" title="Home" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Profile
          </span>
        </div>
      </Link>
      <Link to="/skill">
        <div className="flex justify-center sm:justify-start py-4 sm:hover:bg-orange-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faSkull} size="xl" title="Skill" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;&nbsp;Skill
          </span>
        </div>
      </Link>
      <Link to="/education" className="hidden sm:block">
        <div className="hidden sm:flex justify-center sm:justify-start py-4 sm:hover:bg-orange-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faGraduationCap} size="xl" title="Education" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;Education
          </span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="flex justify-center sm:justify-start py-4 sm:hover:bg-orange-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faComment} size="xl" title="Contact" />
          <span className="hidden sm:inline font-semibold text-lg ">
            &nbsp;&nbsp;Contact
          </span>
        </div>
      </Link>
      <Link to="/todo">
        <div className="flex justify-center sm:justify-start py-4 sm:hover:bg-gray-400 sm:hover:rounded-2xl sm:hover:w-40 sm:hover:pl-3 text-black dark:text-white">
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
            <div class="w-14 h-7 bg-gray-900 rounded-full peer peer-checked:after:translate-x-7   after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-gray-900 after:shadow-[inset_8px_0_0_0_rgba(255,255,255,1)] after:peer-checked:bg-gray-800 peer-checked:after:shadow-none  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-200"></div>
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
        <img src={cat} alt="cat" className="w-12 h-12 rounded-full"></img>
        <div className=" pl-2">
        <span className="text-gray-800 dark:text-gray-100">Kueakun-K</span>
        <br/>
        <span className="text-gray-500">@63010095</span>
        </div>
        
      </div>
    </div>
    // </div>
  );
};
export default Navbar;
