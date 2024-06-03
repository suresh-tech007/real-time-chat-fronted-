import { useEffect } from "react";
import { useSocketContext } from "../contex/SocketContent"
import useConversation from "../zustand/useConversation";
import song from "../assets/sound/notification.mp3"


const useListenMessages = () => {
   const { socket } = useSocketContext();
   const { messages, setMessages } = useConversation();

   useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
         newMessage.shouldShake = true;
         const sound = new Audio(song);
         sound.play();
         setMessages([...messages, newMessage])
      })


      return () => socket?.off("newMessage")

   }, [socket, setMessages, messages])
}
export default useListenMessages;