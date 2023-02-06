import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { UserIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const HandleSubmit = () => {
    axios
      .post("http://localhost:3006/api/user/contact", {
        Name: name,
        Email: email,
        Message: message,
      })
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        Swal.fire(response.data.message);
      })
      .catch((error) => {
        // console.log(error.response.data);
        Swal.fire(error.response.data.message);
      });
  };

  return (
    <>
      {/* Header */}
      <div className="py-2 pl-5 text-xl font-bold border-b-2 border-gray-500 text-red-500 dark:text-yellow-500">
        <span>Contact</span>
      </div>
      {/* Header */}

      {/* Preview */}
      <div className="p-5 border-b-2 border-gray-500">
        <div className="text-gray-500 text-lg mb-3">Preview</div>
        <div className="flex">
          <div className="rounded-full bg-gray-200 p-3">
            <UserIcon className="w-7 h-7 text-gray-500" />
          </div>
          <div className="flex-col justify-between mx-5">
            <input
              disabled
              placeholder="Enter your name"
              className="bg-gray-100 dark:bg-slate-900 placeholder:text-gray-500 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              disabled
              placeholder="Enter your email"
              className="bg-gray-100 dark:bg-slate-900 placeholder:text-gray-500 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-5 mb-2">
          <input
            disabled
            placeholder="Enter your message"
            className="bg-gray-100 dark:bg-slate-900 placeholder:text-gray-500 dark:text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      {/* Preview */}

      {/* Text input */}

      <div className="p-5 border-b-2 border-gray-500">
        {/* text */}
        <div className="text-gray-800 dark:text-gray-300 mb-5">
          Thank you for watching 👋
          <br />
          You can contact me via the box below. 👇
        </div>
        {/* text */}

        {/* input */}
        <div>
          <div className="flex justify-between">
            <input
              placeholder="Name"
              className="w-[48.5%] py-2 px-3 bg-gray-300 dark:bg-gray-800 placeholder:text-gray-500 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="w-[48.5%] py-2 px-3 bg-gray-300 dark:bg-gray-800 placeholder:text-gray-500 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <textarea
              placeholder="Your message"
              className="w-full h-32 py-2 px-3 bg-gray-300 dark:bg-gray-800 placeholder:text-gray-500 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={HandleSubmit}
              className="bg-gray-800 text-gray-300 dark:bg-gray-300 dark:text-gray-800 p-2"
            >
              MESSAGE ME
            </button>
          </div>
        </div>
        {/* input */}
      </div>

      {/* Text input */}
    </>
  );
};

export default Contact;
