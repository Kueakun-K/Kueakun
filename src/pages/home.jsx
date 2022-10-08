import { useState, useEffect } from "react";
import cat from "../img/cat.png";
import gmail from "../img/gmail.png";
import github from "../img/github.png";
import instagram from "../img/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUserLarge,
  faSkull,
  faGraduationCap,
  faComment,
  faTableList,
  faHeart,
  faRetweet,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  const [copy, setCopy] = useState("Copy")
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
      <div className="pt-3  pl-6 text-xl font-bold  dark:text-white">
        <span>Home</span>
      </div>
      <div className="p-4 border-b-2 border-gray-500">
        <div className="flex dark:bg-gray-800 bg-gray-200 rounded-2xl">
          <img src={cat} alt="cat" className="w-12 h-12 rounded-full m-4"></img>
          <div className="mt-7">
            <span className="dark:text-yellow-500">
              Hello {day}. {wish} &nbsp;{date} {time}
            </span>
            <br />
            <div className="mb-5 mt-6 space-x-4 dark:text-white">
              <FontAwesomeIcon icon={faHouseChimney} size="lg" title="Home" />
              <FontAwesomeIcon icon={faUserLarge} size="lg" title="Profile" />
              <FontAwesomeIcon icon={faSkull} size="lg" title="Skill" />
              <FontAwesomeIcon
                icon={faGraduationCap}
                size="lg"
                title="Education"
              />
              <FontAwesomeIcon icon={faComment} size="lg" title="Contact" />
              <FontAwesomeIcon icon={faTableList} size="lg" title="Todo" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-b-2 border-gray-500 dark:text-white">
        <div className="flex mb-4">
          <img
            src={cat}
            alt="cat"
            className="w-12 h-12 rounded-full mr-5"
          ></img>
          <div>
            <span>Kueakun-K</span>
            <br />
            <span>1 DEC 2001</span>
          </div>
        </div>
        <div className="mb-3 ml-6">
          <span>
            Hello world! I am Thanawat Talabtong. I really love to coding all
            day all night. I want to be the World's most famous hacker. I have
            many friends, but I don't have any girlfriend. I have best friends
            in my life. They are stupid-bear 🐻 and stupid-dog 🐶. And they are
            comfort object. happy hacking :)
          </span>
        </div>
        <div className="mb-3">3</div>
        <div className="flex space-x-20 justify-center">
          <div className="space-x-2">
            <FontAwesomeIcon icon={faComment} />
            <span>999</span>
          </div>
          <div className="space-x-2">
            <FontAwesomeIcon icon={faRetweet} />
            <span>999</span>
          </div>
          <div className="space-x-2">
            <FontAwesomeIcon icon={faHeart} />
            <span>999</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </div>
      <div className="p-4 border-b-2 border-gray-500 dark:text-white ">
        <div className="flex mb-4">
          <img
            src={cat}
            alt="cat"
            className="w-12 h-12 rounded-full mr-5"
          ></img>
          <div>
            <span>Kueakun-K</span>
            <br />
            <span>now</span>
          </div>
        </div>
        <div className="mb-3 ml-6">
          <div className="flex">
            <img src={gmail} alt="Gmail" className="w-5 h-5" />
            <span className="mx-2">Contact me : </span>
            <div className="group relative">
              <div
                onMouseOut={() => {
                  setCopy("Copy")
                }}
                onClick={() => {
                  navigator.clipboard.writeText("Kueakun0112@gmail.com");
                  setCopy("Copied")
                }}
                className="text-yellow-500 cursor-pointer"
              >
                Kueakun0112@gmail.com
              </div>
              <div className="invisible group-hover:visible absolute z-[1] bottom-8 left-20 text-sm bg-gray-800 rounded p-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-[5px] after:border-[5px] after:border-gray-800 after:border-x-transparent after:border-b-transparent ">
                {copy}
              </div>
            </div>
          </div>
          <div className="flex">
            <img src={github} alt="Github" className="w-5 h-5" />
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
        <div className="flex space-x-20 justify-center">
          <div className="space-x-2">
            <FontAwesomeIcon icon={faComment} />
            <span>999</span>
          </div>
          <div className="space-x-2">
            <FontAwesomeIcon icon={faRetweet} />
            <span>999</span>
          </div>
          <div className="space-x-2">
            <FontAwesomeIcon icon={faHeart} />
            <span>999</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </div>
      {/* <div>
        <span className="text-white">
          ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛟ ᛞ
        </span>
      </div> */}
    </div>
  );
};
export default Home;
