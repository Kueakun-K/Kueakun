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
      <div className="flex w-1/4 justify-center items-center">
        <FontAwesomeIcon icon={faComment} />
        <span>&nbsp;999</span>
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <FontAwesomeIcon icon={faRetweet} />
        <span>&nbsp;999</span>
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <FontAwesomeIcon icon={faHeart} />
        <span>&nbsp;999</span>
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <FontAwesomeIcon icon={faShareAlt} />
      </div>
    </div>
  );
};

export default IconFooter;
