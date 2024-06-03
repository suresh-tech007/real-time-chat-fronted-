import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti"
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../contex/AuthContext";


const MessagesContainer = () => {
 
  const {selectedConversation,setSelectedConversation} = useConversation();
  
  useEffect(()=>{
    return () => setSelectedConversation(null);
  },[setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (<NochatSelected />) : (
        <>
          <div className="bg-slate-5-- px-4 py-2 mb-2">
            <span className="label-text">To: </span>{" "}
            <span className="text-gray-900 font-bold "> {selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />

        </>

      )}
    </div>
  )
}

export default MessagesContainer;


const NochatSelected = () => {
const {authUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full" >
      <div className="px-4 text-center sm:text-lg   md:text-xl text-gray-200 font-semibold flex flex-col ites-center gap-2">
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging </p>
        <TiMessages className="text-3xl md:text-6xl text-center w-full " />

      </div>

    </div>
  )
}
