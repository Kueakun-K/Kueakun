import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUserLarge, faSkull, faGraduationCap, faComment, faTableList, faGhost } from '@fortawesome/free-solid-svg-icons'

import {changeMode} from "../redux/reducers/switchMode"

import kueakun_b from "../img/kueakun_b.png"

const Navbar = () => {
    const darkToggle = useSelector((state) => state.darkToggle.value)
    const dispatch = useDispatch()
    
    return(
        <div className={`${darkToggle && 'dark'}`}>
        <div className="grid grid-cols-6 bottom-0 fixed divide-x sm:divide-x-0 sm:static sm:block sm:w-56 sm:h-screen dark:bg-gray-900 bg-red-200  w-full">
            <div className=" hidden sm:block pt-6 mb-5"><img src={kueakun_b} alt="KUEAKUN"></img></div>
            <Link to="/">
                <div className="flex justify-center sm:justify-start py-4 active:bg-white hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faHouseChimney} size="xl" title="Home" />
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;&nbsp;&nbsp;Home</span>
                </div>
            </Link>
            <Link to="/profile">
                <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faUserLarge} size="xl" title="Home" />
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;&nbsp;&nbsp;Profile</span>
                </div>
            </Link>
            <Link to="/skill">
                <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faSkull} size="xl" title="Skill" />
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;&nbsp;&nbsp;Skill</span>
                </div>
            </Link>
            <Link to="/education">
                <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faGraduationCap} size="xl" title="Education"/>
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;Education</span>
                </div>
            </Link>
            <Link to="/contact">
                <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faComment} size="xl" title="Contact"/>
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;&nbsp;Contact</span>
                </div>
            </Link>
            <Link to="/todo">
                <div className="flex justify-center sm:justify-start py-4 hover:bg-white sm:hover:pl-3">
                    <FontAwesomeIcon icon={faTableList} size="xl" title="Todo"/>
                    <span className="hidden sm:inline font-semibold text-lg">&nbsp;&nbsp;Todo</span>
                </div>
            </Link>
            <div>
                <FontAwesomeIcon icon={faGhost} flip style={{animationDuration: '3s'}} size="xl" title="Ghost"/>
                <input type="checkbox" onClick={() => dispatch(changeMode())} />
            </div>
            <div>

            </div>
        </div>
        </div>
    )
}
export default Navbar



 