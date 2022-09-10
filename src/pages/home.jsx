import {Link} from "react-router-dom"

const Home = () => {
  return (
      // <div className="flex w-10/12">
        <div className="flex bg-blue-400 sm:border-x-2 sm:w-full h-screen">
          <h2><Link to="darkmode">darkmode</Link></h2>
        </div>
      // </div>
  );
};
export default Home;
