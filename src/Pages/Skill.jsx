import React from "react";

import HTML_CSS_JS from "../Assets/HTML_CSS_JS.png";
import typescript from "../Assets/typescript.png";

import tailwindcss from "../Assets/tailwindcss.jpg";
import bootstrap5 from "../Assets/bootstrap5.jpg";

import reactjs from "../Assets/reactjs.png";
import reactnative from "../Assets/reactnative.png";

import nodejs from "../Assets/nodejs.png";
import expressjs from "../Assets/expressjs.png";

import mongodb from "../Assets/mongodb.png";
import mysql from "../Assets/mysql.png";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

const Skill = () => {
  return (
    <>
      {/* Block 1 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader cat={true} name="Kueakun-K" text="now" />
        {/* text */}
        <div className="mb-3 mx-5">HTML CSS JavaScript TypeScript</div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img
            src={HTML_CSS_JS}
            alt="HTML_CSS_JS"
            className="w-[49%] rounded border border-black"
          />
          <img
            src={typescript}
            alt="typescript"
            className="w-[49%] rounded border border-black"
          />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 1 */}

      {/* Block 2 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader cat={true} name="Kueakun-K" text="now" />
        {/* text */}
        <div className="mb-3 mx-5">TailwindCSS Bootstrap</div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img
            src={tailwindcss}
            alt="tailwindcss"
            className="w-[49%] rounded border border-black"
          />
          <img
            src={bootstrap5}
            alt="bootstrap5"
            className="w-[49%] rounded border border-black"
          />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 2 */}

      {/* Block 3 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader cat={true} name="Kueakun-K" text="now" />
        {/* text */}
        <div className="mb-3 mx-5">ReactJS React Native</div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img
            src={reactjs}
            alt="reactjs"
            className="w-[49%] rounded border border-black"
          />
          <img
            src={reactnative}
            alt="reactnative"
            className="w-[49%] rounded border border-black"
          />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 3 */}

      {/* Block 4 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader cat={true} name="Kueakun-K" text="now" />
        {/* text */}
        <div className="mb-3 mx-5">NodeJS ExpressJS</div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img
            src={nodejs}
            alt="nodejs"
            className="w-[49%] rounded border border-black"
          />
          <img
            src={expressjs}
            alt="expressjs"
            className="w-[49%] rounded border border-black"
          />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 4 */}

      {/* Block 5 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader cat={true} name="Kueakun-K" text="now" />
        {/* text */}
        <div className="mb-3 mx-5">MongoDB MySQL</div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img
            src={mongodb}
            alt="mongodb"
            className="w-[49%] rounded border border-black"
          />
          <img
            src={mysql}
            alt="mysql"
            className="w-[49%] rounded border border-black"
          />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 5 */}
    </>
  );
};

export default Skill;
