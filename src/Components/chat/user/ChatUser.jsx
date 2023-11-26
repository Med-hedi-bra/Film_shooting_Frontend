import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../../Auth";

function ChatUser() {
  const auth = useAuth()
  let username =auth.user?.email
  let password = auth.user?.email
  return (
    <div style={{height:"500", width:"800"}}>
        this a user
      <ChatEngine
        projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
        userName={username}
        userSecret={password}
        height="calc(100vh - 12px)"

      ></ChatEngine>
    </div>
  );
} 

export default ChatUser;
