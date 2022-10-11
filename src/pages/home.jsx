import { useState, useEffect } from "react";

import cat from "../img/cat.png";
import kuea from "../img/kueaCrop.JPG";
import gmail from "../img/gmail.png";
import instagram from "../img/instagram.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  const [copy, setCopy] = useState("Copy");
  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${today.getDate()}/${today.toLocaleDateString(locale, {
    month: "numeric",
  })}/${today.toLocaleDateString(locale, { year: "numeric" })}  `;
  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && hour >= 5 && "Morning 🌄") ||
    (hour < 17 && hour >= 12 && "Afternoon ☀️") ||
    (hour < 21 && hour >= 17 && "Evening 🌅") ||
    "night 🌙"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div className="h-full">
      {/* page */}
      <div className="pt-2  pl-5 text-xl font-bold  dark:text-white">
        <span>Home</span>
      </div>

      {/* header */}
      <div className="p-3 border-b-2 border-gray-500">
        <div className="flex dark:bg-gray-800 bg-gray-200 rounded-2xl">
          <img src={cat} alt="cat" className="w-12 h-12 rounded-full m-4"></img>
          <div className="flex dark:text-yellow-500 justify-center items-center">
            Hello {day}. {wish} &nbsp;{date} {time}
          </div>
        </div>
      </div>

      {/* container 1 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        {/* profile */}
        <div className="flex mb-3">
          <img
            src={cat}
            alt="cat"
            className="w-12 h-12 rounded-full mr-5"
          ></img>
          <div>
            <span>Kueakun-K</span>
            <br />
            <span className="text-gray-500 text-sm">1 DEC 2001</span>
          </div>
        </div>

        {/* text */}
        <div className="mb-3 mx-5">
          <span>
            Hello world! I am{" "}
            <span className="text-yellow-500">Kueakun Niyomsit.</span> Now I'm
            studying computer engineering 3<sup>rd</sup> year at
            <span className="text-orange-600"> KMITL.</span> <br />
            <span className="text-yellow-500"> happy hacking :)</span>
          </span>
        </div>

        {/* img */}
        <div className="flex mb-3 justify-center mx-5">
          <img
            src={kuea}
            alt="Kuea"
            className="sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 rounded-lg "
          />
        </div>

        {/* icon */}
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
      </div>

      {/* container 2 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white ">
        {/* profile */}
        <div className="flex mb-3">
          <img
            src={cat}
            alt="cat"
            className="w-12 h-12 rounded-full mr-5"
          ></img>
          <div>
            <span>Kueakun-K</span>
            <br />
            <span className="text-gray-500 text-sm">now</span>
          </div>
        </div>
        {/* text */}
        <div className=" ml-6">
          <div className="flex">
            <img src={gmail} alt="Gmail" className="w-5 h-5" />
            <span className="mx-2">Contact : </span>
            <div className="group">
              <div
                onMouseOut={() => {
                  setCopy("Copy");
                }}
                onClick={() => {
                  navigator.clipboard.writeText("Kueakun0112@gmail.com");
                  setCopy("Copied");
                }}
                title={copy}
                className="text-yellow-500 cursor-pointer"
              >
                Kueakun0112@gmail.com
              </div>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            <span className="mx-2">Github :</span>
            <a
              href="https://github.com/Kueakun-K"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500"
            >
              Kueakun-K
            </a>
          </div>
          <div className="flex">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
            <span className="mx-2">Instagram :</span>
            <a
              href="https://www.instagram.com/kueakun.k/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500"
            >
              kueakun.k
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;