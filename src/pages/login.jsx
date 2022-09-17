import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        axios.post("https://kueakun.as.r.appspot.com/login", {
            username: username,
            password: password
        }).then((respond) => {
            if (respond.data !== false){
                console.log(respond.data)
                navigate('../todo')
            }
        })
    }
    return(
        <div>
            <label className="dark:text-white">username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <label className="dark:text-white">password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button className="dark:text-white" onClick={() => login()}>Enter</button>
        </div>
    )
}

export default Login