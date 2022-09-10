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

const Navbar = () => {
  const darkToggle = useSelector((state) => state.darkToggle.value);
  const dispatch = useDispatch();

  return (
    <div className={`${darkToggle && "dark"}`}>
      <div className="grid grid-cols-6 bottom-0 fixed divide-x sm:divide-x-0 sm:static sm:block sm:w-56 sm:h-screen dark:bg-gray-900 bg-red-200  w-full">
        <div className=" hidden sm:block pt-6 mb-5">
          <img src={kueakun_b} alt="KUEAKUN"></img>
        </div>

        <div className="flex justify-center sm:justify-start py-4 active:bg-white hover:bg-white sm:hover:pl-3">
          <Link to="/">
            <FontAwesomeIcon icon={faHouseChimney} size="xl" title="Home" />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;&nbsp;&nbsp;Home
            </span>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUserLarge} size="xl" title="Home" />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;&nbsp;&nbsp;Profile
            </span>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
          <Link to="/skill">
            <FontAwesomeIcon icon={faSkull} size="xl" title="Skill" />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;&nbsp;&nbsp;Skill
            </span>
          </Link>
        </div>

        <div className="hidden sm:flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
          <Link to="/education">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="xl"
              title="Education"
            />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;Education
            </span>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
          <Link to="/contact">
            <FontAwesomeIcon icon={faComment} size="xl" title="Contact" />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;&nbsp;Contact
            </span>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
          <Link to="/todo">
            <FontAwesomeIcon icon={faTableList} size="xl" title="Todo" />
            <span className="hidden sm:inline font-semibold text-lg">
              &nbsp;&nbsp;Todo
            </span>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-start py-4">
          <div className="hidden sm:flex">
            <FontAwesomeIcon
              icon={faGhost}
              flip
              style={{ animationDuration: "3s" }}
              size="xl"
              title="Ghost"
            />&nbsp;&nbsp;&nbsp;
            <label className="inline-flex relative items-center cursor-pointer ">
                <input type="checkbox" className=" sr-only peer" onClick={() => dispatch(changeMode())} />
                <div class="w-14 h-7 bg-gray-800 rounded-full peer peer-checked:after:translate-x-7   after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-gray-800 after:shadow-[inset_8px_0_0_0_rgba(255,255,255,1)] after:peer-checked:bg-gray-800 peer-checked:after:shadow-none  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
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
        <div></div>
      </div>
    </div>
  );
};
export default Navbar;
