import React, { useState, useEffect } from 'react';
import  io  from "socket.io-client";
import "./chatClient.css"

const socket = io('http://localhost:4000');

const ChatClient = () => {

  const [message, setMessage] = useState('');
  const [username, setUsername]  = useState('');
  const [listMessage, setListMessage] = useState([{
    body:'Bienvenido al chat',
    user: 'CPU',
  }]);


  return (
    <>
      <input onChange={event => setUserName(event.target.value)} className='txt-username' type="text" placeholder='username' />

      <div className='div-chat'>
        {listMessage.map((message, idx) => (
          <p key={message + idx}>{message.user}: {message.body}</p>
        ))
        }
        <form  className="form">
        <span className="title">Chat-io</span>
        <p className="description">Type your message.</p>
        <div className='div-type-chat'>
          {/* <img
            className="emoji-icon"
            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
            onClick={() => setShowPicker(!showPicker)} />
          {showPicker && <Picker className="prueba" onEmojiClick={onEmojiClick} />} */}
          <input
            value={message}
            placeholder="Type your message"
            onChange={e => setMessage(e.target.value)}
            type="text" name="text" id="chat-message"
            className="input-style"
          />
          <button type="submit">Send</button>
        </div>
      </form>
      </div>
      
    </>
  )
}

export default ChatClient