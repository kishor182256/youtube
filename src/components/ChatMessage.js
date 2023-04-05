import React from 'react'
import { user } from '../images'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center flex-start">
        <img src={user} className="h-6 w-6"  alt={user}/>
        <span className="m-1">{name}</span>
        <span className="ml-1">{message}</span>
    </div>
  )
}

export default ChatMessage