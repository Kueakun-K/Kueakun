import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const IconFooter = () => {
  return (
    <div className="flex mx-5 ">
      <div className="flex w-1/4 justify-center items-center ">
        <div className="hover:text-red-500 dark:hover:text-yellow-500 cursor-pointer">
        <FontAwesomeIcon icon={faComment} />
        <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center items-center">
      <div className="hover:text-green-500 cursor-pointer">
        <FontAwesomeIcon icon={faRetweet} />
        <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center items-center">
      <div className="hover:text-pink-600 cursor-pointer">
        <FontAwesomeIcon icon={faHeart} />
        <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center items-center">
      <div className="hover:text-red-500 dark:hover:text-yellow-500 cursor-pointer">
        <FontAwesomeIcon icon={faShareAlt} />
        </div>
      </div>
    </div>
  );
};

export default IconFooter;
