import React from "react";
import Nebula from "../Assets/NebulaRe.png";
import Cat from "../Assets/cat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div>
      {/* header */}
      <div className="flex fixed top-0 bg-gray-100 dark:bg-slate-900 w-full sm:w-max z-10">
        <div className="text-red-500 dark:text-yellow-500 my-4 mx-5 ">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </div>
        <div className="my-auto">
          <div className="text-black dark:text-white">Kueakun-K</div>
          <div className="text-gray-500">Kueakun Niyomsit</div>
        </div>
      </div>
      {/* header */}

      {/* img + contact*/}
      <div className="relative h-80">
        {/* img cover */}
        <img
          src={Nebula}
          alt="Nebula"
          className="absolute z-1 mt-14 h-48 w-full "
        />
        {/* img cover */}

        {/* profile img */}
        <img
          src={Cat}
          alt="cat"
          className="absolute z-[2] rounded-full w-[7.5rem] top-48 left-6 border-gray-100 dark:border-slate-900 border-4"
        />
        {/* profile img */}

        {/* contact */}
        <div className="absolute flex top-[16.5rem] right-12 z-[3] space-x-3 dark:text-white">
          <a href="https://github.com/Kueakun-K"
              target="_blank"
              rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a href="https://www.instagram.com/kueakun.k/"
              target="_blank"
              rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a href="https://www.instagram.com/kueakun.k/"
              target="_blank"
              rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </a>
          <a href="mailto:Kueakun0112@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
        {/* contact */}
      </div>
      {/* img + contact*/}

      {/* info name */}
      <div></div>
      {/* nav profile */}
      <div></div>
    </div>
  );
};

export default Profile;
