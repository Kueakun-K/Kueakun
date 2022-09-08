import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUserLarge, faSkull, faGraduationCap, faComment, faTableList } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <div className="grid bg-red-200 grid-cols-6 divide-x border-y-2 bottom-0 w-screen fixed sm:divide-y
        sm:grid  sm:grid-flow-row sm:grid-cols-1 sm:static sm:w-2/12">
            <div className="hidden sm:flex"></div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faHouseChimney} size="xl" />
            </div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faUserLarge} size="xl" />
            </div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faSkull} size="xl"/>
            </div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faGraduationCap} size="xl"/>
            </div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faComment} size="xl"/>
            </div>
            <div className="flex justify-center p-3"><FontAwesomeIcon icon={faTableList} size="xl"/>
            </div>
            <div></div>
        </div>
    )
}
export default Navbar
