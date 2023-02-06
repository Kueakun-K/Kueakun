import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

const Message = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(
    localStorage.getItem("refreshToken")
  );
  const [message, setMessage] = React.useState([]);

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get(
          "http://localhost:3006/api/user/messages",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setMessage(response.data);
        });
    }
  }, [token, navigate]);

  return (
    <>
      {message &&
        message.map((data, index) => (
          <div
            className="p-3 border-b-2 border-gray-500 dark:text-white "
            key={index}
          >
            <ProfileHeader user={true} name={data.name} text={data.email} />
            <div className="mb-3 mx-5">{data.message}</div>
            <IconFooter />
          </div>
        ))}
    </>
  );
};

export default Message;
