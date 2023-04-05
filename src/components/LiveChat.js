import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generate, generateMessages } from '../utils/nameList';
import ChatMessage from './ChatMessage'


const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector((state)=>state.chat.messages);
    const [liveMessage,setLiveMessage] = useState('')


    useEffect(()=>{
      const timer = setInterval(()=>{

            

            dispatch(addMessages({
                name:generate(),
                message:generateMessages()
            }))

      },10000)
      return () => {
        clearInterval(timer)
      }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessages({
            name:"Kishor Gunjal",
            message:liveMessage
        }))
    }
  return (
    <div className="flex flex-col">
    <div className="h-[300px] overflow-scroll flex flex-col   flex-start w-full rounded-md  bg-slate-50 ml-2 p-2 border border-gray-200">
        {chatMessage?.map((message)=>{
            return(
                <ChatMessage name={message.name} message={message.message}/>
            )
        })}
    </div>
    <form className="flex items-center" onSubmit={handleSubmit}>
        <input type="text" 
        value={liveMessage}
        onChange={(e)=>setLiveMessage(e.target.value)}
        placeholder="Chat"
         className="w-3/4  m-4"/>
        <button className="bg-green-200 color-red px-2 mx-2 h-10 mr-10">Submit</button>
    </form>
    </div>
  )
}

export default LiveChat