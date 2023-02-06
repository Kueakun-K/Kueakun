import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

const Message = () => {
  const navigate = useNavigate();
  const [tokenR, setTokenR] = React.useState(
    localStorage.getItem("refreshToken")
  );
  const [tokenA, setTokenA] = React.useState(
    localStorage.getItem("accessToken")
  );
  const [message, setMessage] = React.useState([]);

  React.useEffect(() => {
    if (!tokenR) {
      navigate("/login");
    } else {
      axios
        .get(
          "http://localhost:3006/api/user/messages",
          {},
          {
            headers: {
              Authorization: `Bearer ${tokenA}`,
            },
          }
        )
        .then((response) => {
          setMessage(response.data);
        })
        .catch(() => {
          axios
            .get(
              "http://localhost:3006/api/auth/token",
              {},
              {
                headers: {
                  Authorization: `Bearer ${tokenR}`,
                },
              }
            )
            .then((res) => {
              setTokenA(res.data.accessToken)
              axios.get(
                "http://localhost:3006/api/user/messages",
                {},
                {
                  headers: {
                    Authorization: `Bearer ${tokenA}`,
                  },
                }
              ).then((res2) => {
                setMessage(res2.data);
              }).catch((err) => {
                Swal.fire(err.response.data.message);
              })
            }).catch(() => {
              setTokenR(null)
              navigate("/login");
            })
        });
    }
  }, [tokenR, tokenA, navigate]);

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
