import { useAuthContext } from "../../contex/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const formattedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilepuc = fromMe? authUser.profilepic: selectedConversation?.profilepic;
  const bubbleBgColor  = fromMe ? 'bg-blue-500' : "";
  const shakeClass = message.shouldShake ? "shake" : "";


  // console.log(selectedConversation)

  return (
    <div className={`chat  ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={profilepuc}  alt="user" />

            </div>
        </div>
        <div className={`${bubbleBgColor} ${shakeClass} text-white chat-bubble pb-2  `}>
          {message.message}

        </div>
        <div className="chat-footer opacity-50 text-xl flex gap-1 items-center">
          {formattedTime }
        </div>
    </div>
  )
}

export default Message;