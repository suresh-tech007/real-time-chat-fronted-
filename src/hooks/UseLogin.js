import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contex/AuthContext";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const backedurl = "https://real-time-chat-backed.onrender.com"

  const login = async (username, password) => {
    
    const success = handleInputErrors({
       username,password
      });
      if(!success) return;
    setLoading(true);
    try {
      
      const res = await fetch(`${backedurl}/api/auth/login` , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
       

      if (data.error) {
        throw new Error(data.error);
      }
      // console.log(data);
      // console.log(JSON.stringify(data));

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading,login}
};

export default UseLogin;

function handleInputErrors({
   username,password
  }) {
    if (!username || !password  ) {
      toast.error("Please fill all the fields");
      return false;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters ");
      return false;
    }
    return true;
  }
  
