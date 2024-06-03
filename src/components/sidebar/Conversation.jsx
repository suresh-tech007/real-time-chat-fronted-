import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../contex/SocketContent";


const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConversation,setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    // console.log(onlineUsers)
    // console.log(isOnline)
    // console.log(conversation._id)
    // console.log("selec" , selectedConversation)
    // console.log(selectedConversation._id)
    // console.log(selectedConversation)
    // console.log(isSelected)
    
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : " "} `}
    onClick={() =>setSelectedConversation(conversation)}
    >
        <div className={`avatar ${isOnline ? "online": ""}`}  >
            <div className="w-12 rounded-full">
                <img src={conversation.profilepic}alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200 ">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
    </div>


   {!lastIdx &&  <div className="divider my-0 py-0 h-1" />}

     
      
    </>
  )
}
export default Conversation;




// import { FaRegUserCircle } from "react-icons/fa";
// import useConversation from "../../zustand/useConversation"



// const Conversation = ({converesation,emoji,lastIdx}) => {
//     const {selectedConversation,setSelectedConversation} = useConversation();
//     // let isSelected= false;
//     const updated = (conversations) =>{
//        if(conversations._id === converesation._id){
//         console.log("conversation : ",converesation)
//         setSelectedConversation(conversations)
//         console.log(selectedConversation)
        
//     }
//     }

//     let isSelected = selectedConversation?._id === converesation._id;
    
//     // console.log(selectedConversation)
//     // console.log(converesation)
//   return (
//     <>
//     <div className={`flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
//   onClick={() => updated(converesation)}
// >

//         <div className="avatar online ">
//             <div className="w-12 rounded-full">
//                 <img src={converesation.profilepic} alt="user avatar" />
//             </div>
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200 "> {converesation.fullName}</p>
//                 <span className="text-xl">{emoji}</span>
//             </div>
//         </div>
//     </div>


//     {!lastIdx && <div className='divider my-0 py-0 h-1' />}

     
      
//     </>
//   )
// }

// export default Conversation






// export default Conversation




// // import { FaRegUserCircle } from "react-icons/fa";


// // const Conversation = () => {
// //   return (
// //     <>
// //     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ">
// //         <div className="avatar online ">
// //             <div className="w-12 rounded-full">
// //                 <img src= "./user.png"alt="user avatar" />
// //             </div>
// //         </div>
// //         <div className="flex flex-col flex-1">
// //             <div className="flex gap-3 justify-between">
// //                 <p className="font-bold text-gray-200 ">suresh kumasr</p>
// //                 <span className="text-xl">😒</span>
// //             </div>
// //         </div>
// //     </div>


// //     <div className="divider my-0 py-0 h-1" />

     
      
// //     </>
// //   )
// // }

// // export default Conversation
