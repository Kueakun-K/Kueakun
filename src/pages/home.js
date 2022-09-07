

const Home = () => {
    return(
        <div>
            <div className="flex divide-x ">
                <div className="flex bg-red-400 bottom-0 fixed w-screen sm:static sm:w-3/12 sm:h-screen">
                    <h1>test red bg</h1>
                </div>
                <div className="flex bg-blue-400 w-screen sm:w-7/12 h-screen">
                    <h2>test blue bg</h2>
                </div>
                <div className="flex bg-yellow-500 w-0 sm:w-2/12 sm:h-screen">
                    <h2>test yellow bg</h2>
                </div>
            </div>
        </div>
    )
}
export default Home