import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../redux/messagesSlice";

function MessageForm() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [messageText, setMessageText] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      dispatch(sendMessage(messageText));
      setMessageText("");
    }
  };

  return (
    <div>
      <h2>Enviar Mensaje</h2>
      <div>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
      <div>
        <h2>Mensajes Recibidos</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MessageForm;
