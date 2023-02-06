import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('refreshToken');
    
  
  React.useEffect(()=>{
    if (!token) {
      navigate("/login")
    }
  }, [])
  

  return <div>TODO PAGE</div>;
};

export default Todo;
