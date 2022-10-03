import { useState, useEffect } from "react";
import cat from "../img/cat.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUserLarge,
  faSkull,
  faGraduationCap,
  faComment,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
    // This will trigger a rerender every component that uses the useDate hook.
    setDate(new Date());
  }, 1000);
  return () => {
    clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
  }
}, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${today.getDate()}/${today.toLocaleDateString(locale, { month: 'numeric' })}/${today.toLocaleDateString(locale, {year: 'numeric'})}  `;
  const hour = today.getHours();
  const wish = `Good ${((hour < 12 && hour >= 5) && 'Morning 🌄') || ((hour < 17 && hour >=12) && 'Afternoon ☀️' ) || ((hour < 21 && hour>=17) && 'Evening 🌅') || 'night 🌙'}, `;

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric',second: 'numeric' });
  return (
    <div>
      <div className="py-3 pl-4 text-xl font-bold  dark:text-gray-300 ">
        <span>Home</span>
      </div>
      <div className="p-4 border-b-2 border-gray-500">
        <div className="flex bg-gray-800 rounded-2xl">
          <img src={cat} alt="cat" className="w-12 h-12 rounded-full m-4"></img>
          <div className="mt-6">
          <span className="dark:text-gray-300">What's happening?</span>
          <br/>
          <div className="my-5 space-x-4 dark:text-white">
          <FontAwesomeIcon icon={faHouseChimney} size="lg" title="Home" />
          <FontAwesomeIcon icon={faUserLarge} size="lg" title="Profile" />
          <FontAwesomeIcon icon={faSkull} size="lg" title="Skill" />
          <FontAwesomeIcon icon={faGraduationCap} size="lg" title="Education" />
          <FontAwesomeIcon icon={faComment} size="lg" title="Contact" />
          <FontAwesomeIcon icon={faTableList} size="lg" title="Todo" />
          </div>
          </div>
        </div>
          
      </div>
      <div>
        <span className="text-white">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛟ ᛞ</span>
        <br/>
        <span className="text-yellow-500"> Hello {day}. {wish} <br/> {date} {time}</span>
      </div>
    </div>
  );
};
export default Home;
