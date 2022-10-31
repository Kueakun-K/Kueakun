import React from "react";

import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
// import { HeartIcon, ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon, ShareIcon } from "@heroicons/react/24/outline";

const IconFooter = () => {
  return (
    <div className="flex mx-5 ">
      <div className="flex w-1/4 justify-center ">
        <div className="flex items-center hover:text-red-500 dark:hover:text-yellow-500 cursor-pointer">
          <ChatBubbleOvalLeftIcon className=" w-5 h-5" />

          <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center">
        <div className="flex items-center hover:text-green-500 cursor-pointer">
          <ArrowPathRoundedSquareIcon className=" w-5 h-5" />
          <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center">
        <div className="flex items-center hover:text-pink-600 cursor-pointer">
          <HeartIcon className=" w-5 h-5" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg> */}

          <span>&nbsp;999</span>
        </div>
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <div className="hover:text-red-500 dark:hover:text-yellow-500 cursor-pointer">
          <ShareIcon className=" w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default IconFooter;
