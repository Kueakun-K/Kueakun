import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import cat from "../Assets/cat.png";

import {
  UserCircleIcon,
  KeyIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const HandleLogin = () => {
    axios
      .post("http://localhost:3006/api/auth/login", {
        Username: Username,
        Password: Password,
      })
      .then((response) => {
        setUsername("");
        setPassword("");
        // console.log(response.data)
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/message");
      })
      .catch((error) => {
        // console.log(error.response.data);
        Swal.fire(error.response.data.message);
      });
  };
  return (
    <>
      <div className="flex mt-10 justify-center">
        <img
          src={cat}
          alt="cat"
          className="rounded-full w-24 absolute z-10 border-4 border-black dark:border-white"
        />
        <div className="absolute bg-gray-300 dark:bg-gray-800 p-7 pt-[3.5rem] top-[4.5rem] rounded mt-6 border-[3px] border-black dark:border-white">
          <div className="flex border-b-2 border-black dark:border-white mb-7 py-2 dark:text-white">
            <UserCircleIcon className="w-7 mr-3" />
            <input
              value={Username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              className="focus:outline-none bg-gray-300 dark:bg-gray-800"
            />
          </div>
          <div className="flex border-b-2 border-black dark:border-white mb-7 py-2 dark:text-white">
            <KeyIcon className="w-7 mr-3" />
            <input
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              type="Password"
              placeholder="Password"
              className="focus:outline-none bg-gray-300 dark:bg-gray-800"
            />
          </div>
          <button
            onClick={HandleLogin}
            className="w-full flex justify-center py-2 bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded"
          >
            <LockClosedIcon className="w-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
