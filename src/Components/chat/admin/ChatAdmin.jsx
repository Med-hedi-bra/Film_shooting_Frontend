// import {} from'react-chat-engine-advanced';
import React from 'react'
import { ChatEngine } from 'react-chat-engine'


function ChatSupport() {
   
  return (
    <div style={{height:"600px"}}>
        <ChatEngine 
      projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
      userName={process.env.REACT_APP_ADMIN_USERNAME}
      userSecret={process.env.REACT_APP_ADMIN_SECRET}
      height='calc(100vh - 12px)'
    />
    <br></br>
    <br></br>
    <br></br>
    <br></br> 
    </div>
  )
}

export default ChatSupport