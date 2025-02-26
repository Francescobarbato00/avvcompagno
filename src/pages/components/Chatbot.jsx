import React, { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Benvenuto! Di cosa hai bisogno oggi?", sender: "bot" },
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, isMobile]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = (message) => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: message, sender: "user" },
      ]);
      setTimeout(() => {
        const botReply = getBotReply(message);
        if (botReply) {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, text: botReply, sender: "bot" },
          ]);
        }
      }, 1000);
    }
  };

  const getBotReply = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("servizi")) {
      return "Offriamo consulenza legale, supporto nelle controversie e soluzioni personalizzate per le aziende.";
    }
    if (lowerMessage.includes("operiamo")) {
      return "Operiamo principalmente a Roma e Milano, con progetti in tutta Italia.";
    }
    if (lowerMessage.includes("contattaci")) {
      return "Puoi contattarci al numero 06 12345678 oppure via email a info@studiolegale.it.";
    }
    return "Grazie per il tuo messaggio. Ti risponderemo al più presto!";
  };

  return (
    <>
      {/* Bottone per aprire la chat */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={toggleChat}
          className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:bg-red-700 transition duration-300"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-[99] animate-fadeInOverlay"></div>
      )}

      {/* Finestra della chat */}
      {isOpen && (
        <div
          className={`fixed ${
            isMobile
              ? "inset-0 w-full h-full" // FULLSCREEN su Mobile
              : "bottom-20 right-6 w-[300px] h-[350px]" // COMPATTA su Desktop
          } rounded-lg bg-white shadow-lg flex flex-col z-[100] transition-all duration-500 ${
            isMobile ? "animate-fadeInMobile" : "animate-slideInUp"
          }`}
        >
          {/* Header della chat */}
          <div className="bg-red-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="text-md font-semibold">ChatBot</h3>
            <button onClick={toggleChat} className="hover:opacity-80 transition">
              <FiX size={24} />
            </button>
          </div>

          {/* Contenitore dei messaggi */}
          <div
            ref={chatContainerRef}
            className="flex-1 p-3 overflow-y-auto bg-gray-100 text-sm"
            style={{
              maxHeight: isMobile ? "calc(100% - 100px)" : "calc(100% - 80px)",
              scrollbarWidth: "thin",
              scrollbarColor: "#999 #f1f1f1",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-md max-w-xs shadow-sm ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  } text-sm`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Bottoni per domande rapide */}
          <div className="p-3 border-t border-gray-300 bg-white flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => sendMessage("I nostri servizi?")}
              className="bg-red-500 text-white px-3 py-2 rounded-full text-sm hover:bg-red-600 transition"
            >
              Servizi
            </button>
            <button
              onClick={() => sendMessage("Dove operiamo?")}
              className="bg-red-500 text-white px-3 py-2 rounded-full text-sm hover:bg-red-600 transition"
            >
              Sede
            </button>
            <button
              onClick={() => sendMessage("Come contattarci?")}
              className="bg-red-500 text-white px-3 py-2 rounded-full text-sm hover:bg-red-600 transition"
            >
              Contattaci
            </button>
          </div>
        </div>
      )}

      {/* Animazioni e personalizzazioni scrollbar */}
      <style jsx>{`
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInMobile {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeInOverlay {
          animation: fadeInOverlay 0.2s ease-in-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out forwards;
        }
        .animate-fadeInMobile {
          animation: fadeInMobile 0.4s ease-out forwards;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: #999;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
