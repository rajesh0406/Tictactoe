import React,{useState,useEffect,useRef} from 'react'
import io from 'socket.io-client';
import './Chat.css';
function Chat() {
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
  
    const socketRef = useRef();
  
    useEffect(() => {
      socketRef.current = io.connect('https://chattictactoe.herokuapp.com/');
      socketRef.current.on("id", id => {
        setYourID(id);
      })
  
      socketRef.current.on("message", (message) => {
        console.log("here");
        receivedMessage(message);
      })
    }, []);
  
    function receivedMessage(message) {
      setMessages(oldMsgs => [...oldMsgs, message]);
    }
  
    function sendMessage(e) {
      e.preventDefault();
      if(message==="")
      {
          return;
      }
      const messageObject = {
        body: message,
        id: yourID,
      };
      setMessage("");
      socketRef.current.emit("send-message", messageObject);
    }
  
    function handleChange(e) {
      setMessage(e.target.value);
    }
    return (
        <div className="main-container">
          <div className="all-message-container">
            {messages.map((message, index) => {
              if (message.id === yourID) {
                return (
                  <div className="my-messages-row" key={index}>
                    
                    <div className="my-msg arrow-right">
                      {message.body}
                      
                    </div>
                    
                  </div>
                )
              }
              return (
                  

                <div className="friend-message-row" key={index}>
                 
                  <div className="friend-msg arrow-left">
                    {message.body}
                  </div>
                </div>
              )
            })}
          </div>
          <form className="message-form" onSubmit={sendMessage}>
            <textarea className="input-text-area" value={message} onChange={handleChange} placeholder="Text..." />
            <button className="input-button">Send</button>
          </form>
        </div>
      );
}

export default Chat
