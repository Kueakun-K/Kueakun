import React from "react";
import cat from "../Assets/cat.png";
import { UserIcon } from "@heroicons/react/24/solid";

const ProfileHeader = (props) => {
  return (
    <div className="flex mb-3">
      {props?.cat && (
        <img src={cat} alt="cat" className="w-12 h-12 rounded-full mr-5"></img>
      )}
      {props?.user && (
        <div className="rounded-full bg-gray-200 p-3 mr-5">
          <UserIcon className="w-6 h-6 text-gray-500" />
        </div>
      )}
      <div>
        <span>{props.name}</span>
        <br />
        <span className="text-gray-500 text-sm">{props.text}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
