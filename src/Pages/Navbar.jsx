import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
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

import { changeMode } from "../Services/reducers/switchMode";

import kueakun_b from "../Assets/kueakun_b.png";
import kueakun_w from "../Assets/kueakun_w.png";
import cat from "../Assets/cat.png";

const Navbar = () => {
  const dispatch = useDispatch();
  let activeLink = "text-red-500 dark:text-yellow-500";
  let notActiveLink =
    "text-gray-800 sm:hover:text-black dark:text-gray-300 dark:sm:hover:text-white";
  let navBlock =
    "flex justify-center sm:justify-start py-4 hover:transition-all sm:hover:pl-3";
  let navText = "hidden sm:inline font-semibold text-lg";

  return (
    <div className="grid grid-cols-6 bottom-0 fixed border-t-2 sm:border-t-0  sm:divide-x-0 sm:block sm:w-52 sm:overflow-auto sm:scrollbar sm:top-0 dark:bg-slate-900 bg-gray-100  w-full">
      {/* logo */}
      <div className=" hidden sm:block pt-6 mb-5">
        <img src={kueakun_b} alt="KUEAKUNB" className="dark:hidden h-16"></img>
        <img
          src={kueakun_w}
          alt="KUEAKUNW"
          className="hidden dark:block h-16"
        ></img>
      </div>
      {/* logo */}

      {/* home */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faHouseChimney} size="xl" title="Home" />
          <span className={navText}>&nbsp;&nbsp;&nbsp;Home</span>
        </div>
      </NavLink>
      {/* home */}

      {/* profile */}
      <NavLink
        to="/info/profile"
        className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faUserLarge} size="xl" title="Profile" />
          <span className={navText}>&nbsp;&nbsp;&nbsp;Profile</span>
        </div>
      </NavLink>
      {/* profile */}

      {/* skill */}
      <NavLink
        to="/info/skill"
        className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faSkull} size="xl" title="Skill" />
          <span className={navText}>&nbsp;&nbsp;&nbsp;Skill</span>
        </div>
      </NavLink>
      {/* skill */}

      {/* education */}
      <NavLink
        to="/info/education"
        className={({ isActive }) =>
          isActive
            ? activeLink + " hidden sm:block"
            : notActiveLink + " hidden sm:block"
        }
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faGraduationCap} size="xl" title="Education" />
          <span className={navText}>&nbsp;Education</span>
        </div>
      </NavLink>
      {/* education */}

      {/* contact */}
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faComment} size="xl" title="Contact" />
          <span className={navText}>&nbsp;&nbsp;Contact</span>
        </div>
      </NavLink>
      {/* contact */}

      {/* todo */}
      <NavLink
        to="/todo"
        className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
      >
        <div className={navBlock}>
          <FontAwesomeIcon icon={faTableList} size="xl" title="Todo" />
          <span className={navText}>&nbsp;&nbsp;Todo</span>
        </div>
      </NavLink>
      {/* todo */}

      {/* switch mode */}
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
            <div class="w-14 h-7 bg-gray-800 rounded-full peer peer-checked:after:translate-x-7   after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-gray-800 after:shadow-[inset_8px_0_0_0_rgba(255,255,255,1)] after:peer-checked:bg-gray-800 peer-checked:after:shadow-none  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-300"></div>
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
      {/* switch mode */}

      {/* profile */}
      <div className="hidden sm:flex justify-center mt-20  p-3 ">
        <NavLink to="/login">
          <img src={cat} alt="cat" className="w-12 h-12 rounded-full"></img>
        </NavLink>
        <div className=" pl-2">
          <span className="text-gray-800 dark:text-gray-100">Kueakun-K</span>
          <br />
          <span className="text-gray-500">@63010095</span>
        </div>
      </div>
      {/* profile */}
    </div>
  );
};
export default Navbar;
