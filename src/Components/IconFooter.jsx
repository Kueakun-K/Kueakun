import React from "react";

import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

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
