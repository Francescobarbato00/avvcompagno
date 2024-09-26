import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Funzione per aprire e chiudere la finestra di chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per ottenere l'orario attuale in formato HH:MM
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Funzione per aggiungere il messaggio dell'utente e la risposta del bot
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return; // Non inviare messaggi vuoti

    // Aggiungi il messaggio dell'utente
    const userMessage = {
      text: inputMessage,
      time: getCurrentTime(),
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    // Simula che il bot sta scrivendo
    setIsTyping(true);

    // Simula una risposta del bot con un leggero ritardo
    setTimeout(() => {
      const botResponse = {
        text: "Sto elaborando la tua richiesta. Ti risponderemo al più presto.",
        time: getCurrentTime(),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false); // Fine effetto typing
    }, 2000); // Simula un tempo di attesa per la risposta del bot
  };

  return (
    <div>
      {/* Icona del chatbot */}
      <div
        className="fixed bottom-8 right-8 md:bottom-4 md:right-4 bg-red-600 text-white rounded-full p-4 shadow-lg cursor-pointer z-50"
        onClick={toggleChat}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2M14 4h4m-2-2v4M4 12h12"
          />
        </svg>
      </div>

      {/* Finestra del chatbot */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg z-50 transform translate-x-0"
          style={{ left: "auto", right: "4px" }} // aggiustamento per mobile
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Assistente Virtuale</h2>
              <button onClick={toggleChat} className="text-gray-400 hover:text-gray-600">
                ✖
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="h-64 sm:h-72 md:h-80 bg-gray-100 rounded-lg mb-4 p-2 overflow-y-scroll">
              {/* Visualizzazione dei messaggi */}
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : ""}`}>
                  <p className={`text-gray-700 ${message.sender === "bot" ? "text-left" : "text-right"}`}>
                    {message.text}
                  </p>
                  <p className="text-xs text-gray-500">
                    {message.time}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="text-left text-gray-500 text-xs mb-2">
                  Il bot sta scrivendo...
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Scrivi un messaggio..."
              className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition-colors"
              onClick={handleSendMessage}
            >
              Invia
            </button>
          </div>
        </div>
      )}
      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 640px) {
          div.fixed {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            margin: 0 auto;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
