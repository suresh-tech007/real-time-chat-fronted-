import React, { useContext, useState } from 'react'
import { useAuthContext } from '../contex/AuthContext';
import toast from 'react-hot-toast';

const UseLogout = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()
   const logout = async() =>{
    setLoading(true)
    try {
        const res = await fetch("api/auth/logout",{
            method: "GET",
            headers:{"Contect-Type":"application/json"}
        });
        const data = await res.json()
        if(data.json){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null)
        
    } catch (error) {
        toast.error(error.message)

        
    }finally{
        setLoading(false)
    }
   }
   return {loading,logout}
}

export default UseLogout