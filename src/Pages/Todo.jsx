import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  // let agent = navigator.userAgent;
  // let test = navigator.storage;
  // console.log(navigator.connection);
  // const memory = navigator.deviceMemory
  // console.log (`This device has at least ${memory}GiB of RAM.`)
  // console.log('Concurrency', navigator.hardwareConcurrency)
  // console.log(navigator.hid)
  // console.log(navigator.keyboard)
  // console.log(navigator.language)
  // console.log(navigator.languages)
  // console.log(navigator.locks)
  // console.log(navigator.serial.grtPorts)
  // console.log(navigator.storage)
  // console.log(window.name)
  // console.log(navigator.userAgentData.brands);
  const navigate = useNavigate();
  React.useEffect(()=>{
    navigate("/login")
  },[])
  

  return <div></div>;
};

export default Todo;
