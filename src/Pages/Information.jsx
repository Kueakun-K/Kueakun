import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nebula from "../Assets/NebulaRe.png";
import Cat from "../Assets/cat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Information = () => {
  return (
    <>
      {/* header */}
      <div className="flex fixed sm:static  top-0 bg-gray-100 dark:bg-slate-900 w-full z-10">
        <div className=" text-red-500 dark:text-yellow-500 my-4 mx-5 ">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </div>
        <div className="my-auto">
          <div className="text-black dark:text-white">Kueakun-K</div>
          <div className="text-gray-500">Kueakun Niyomsit</div>
        </div>
      </div>
      {/* header */}

      {/* img + contact*/}
      <div className="relative h-80 sm:h-64">
        {/* img cover */}
        <img
          src={Nebula}
          alt="Nebula"
          className="absolute z-1 mt-14 sm:mt-0 h-48 w-full "
        />
        {/* img cover */}

        {/* profile img */}
        <img
          src={Cat}
          alt="cat"
          className="absolute z-[2] rounded-full w-[7.5rem] top-48 sm:top-32 left-4 sm:left-6 border-gray-100 dark:border-slate-900 border-4"
        />
        {/* profile img */}

        {/* contact */}
        <div className="absolute flex top-[16.5rem] sm:top-52 right-6 sm:right-12 z-[3] space-x-3 dark:text-gray-100">
          <a
            href="https://www.linkedin.com/in/kueakun-niyomsit-369457255/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href="https://github.com/Kueakun-K"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href="https://www.instagram.com/kueakun.k/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            href="https://www.instagram.com/kueakun.k/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </a>
          <a href="mailto:Kueakun0112@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
        {/* contact */}
      </div>
      {/* img + contact*/}

      {/* infomation */}
      <div className="mx-4 mb-2 font-medium">
        <div className="dark:text-white text-xl">Kueakun-K</div>
        <div className="text-gray-500 mt-1">@kueakun Niyomsit</div>
        <div className="text-gray-500 mt-1">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span> Joined Dec 2001</span>
        </div>
        <div className="grid grid-cols-2 mt-1">
          <div className="">
            <span className=" dark:text-gray-100 ">63010095</span>
            <span className="text-gray-500 "> Student id</span>
          </div>
          <div>
            <span className=" dark:text-gray-100 ">Engineering</span>
            <span className="text-gray-500 "> Faculty</span>
          </div>
        </div>
      </div>
      {/* infomation */}

      {/* nav profile */}
      <div className="grid grid-cols-3 font-semibold border-b-2 border-gray-500">
        <NavLink
          to="/info/profile"
          className={({ isActive }) =>
            (isActive
              ? "text-red-500 dark:text-yellow-500 border-b-[3px] border-red-500 dark:border-yellow-500"
              : "border-0 text-gray-500 hover:text-red-500 hover:bg-red-200 dark:hover:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:bg-opacity-30") +
            " text-center py-3"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/info/skill"
          className={({ isActive }) =>
            (isActive
              ? "text-red-500 dark:text-yellow-500 border-b-[3px] border-red-500 dark:border-yellow-500"
              : "border-0 text-gray-500 hover:text-red-500 hover:bg-red-200 dark:hover:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:bg-opacity-30") +
            " text-center py-3"
          }
        >
          Skill
        </NavLink>
        <NavLink
          to="/info/education"
          className={({ isActive }) =>
            (isActive
              ? "text-red-500 dark:text-yellow-500 border-b-[3px] border-red-500 dark:border-yellow-500"
              : "border-0 text-gray-500 hover:text-red-500 hover:bg-red-200 dark:hover:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:bg-opacity-30") +
            " text-center py-3"
          }
        >
          Education
        </NavLink>
      </div>
      {/* nav profile */}
      <Outlet />
    </>
  );
};

export default Information;
