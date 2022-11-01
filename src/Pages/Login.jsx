import React from "react";

import cat from "../Assets/cat.png";

import { UserCircleIcon, KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Login = () => {
  return (
    <div className="">
      <div className="flex mt-10 justify-center">
        <img src={cat} alt="cat" className="rounded-full w-24 absolute z-10 border-4 border-black dark:border-white"/>
        <div className="absolute bg-gray-300 dark:bg-gray-800 p-7 pt-[3.5rem] top-[4.5rem] rounded mt-6 border-[3px] border-black dark:border-white">
          <div className="flex border-b-2 border-black dark:border-white mb-7 py-2 dark:text-white">
            <UserCircleIcon className="w-7 mr-3" />
            <input placeholder="Username" className="focus:outline-none bg-gray-300 dark:bg-gray-800" />
          </div>
          <div className="flex border-b-2 border-black dark:border-white mb-7 py-2 dark:text-white">
            <KeyIcon className="w-7 mr-3" />
            <input type="Password" placeholder="Password" className="focus:outline-none bg-gray-300 dark:bg-gray-800" />
          </div>
          <button className="w-full flex justify-center py-2 bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded"><LockClosedIcon className="w-7"/></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
