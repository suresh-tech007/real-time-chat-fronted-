import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UseGetConversation = () => {
  const [loading,setLoading] = useState(false)
 const [conversations,setConversations] = useState([]);
 const backedurl = "https://real-time-chat-backed.onrender.com"

 useEffect(()=>{
    const getConversations = async() =>{
   setLoading(true)
        try {
            const res = await fetch(`${backedurl}/api/users`)
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
            
        } catch (error) {
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }
    }
    getConversations()
 },[]);
 return {loading,conversations}

}

export default UseGetConversation;