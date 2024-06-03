import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contex/AuthContext";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser} = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/singup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
    //   console.log(data);
     
    if(data.error){
        throw new Error(error.message)
    }
    localStorage.setItem("chat-user",JSON.stringify(data));
    setAuthUser(data)


    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default UseSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password is not match ");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters ");
    return false;
  }
  return true;
}
