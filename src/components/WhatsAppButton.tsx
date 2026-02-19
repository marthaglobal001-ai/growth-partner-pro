import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/2348052434610?text=Hello%20WebGenyx%20Sales!%20I%27d%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 animate-pulse-green"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.365.637 4.587 1.75 6.508L2.667 29.333l6.98-1.716A13.285 13.285 0 0 0 16.004 29.333C23.372 29.333 29.333 23.364 29.333 16c0-7.364-5.961-13.333-13.329-13.333ZM16.004 27.2a11.162 11.162 0 0 1-5.664-1.546l-.406-.24-4.145 1.019 1.057-3.985-.267-.42A11.133 11.133 0 0 1 4.8 16c0-6.179 5.025-11.2 11.204-11.2C22.183 4.8 27.2 9.821 27.2 16c0 6.179-5.017 11.2-11.196 11.2Zm6.14-8.4c-.336-.168-1.988-.976-2.296-1.088-.308-.113-.533-.168-.757.168-.224.336-.864 1.088-1.06 1.312-.196.224-.392.252-.728.084-.336-.168-1.42-.52-2.704-1.656-1-.888-1.676-1.984-1.872-2.32-.196-.336-.02-.516.148-.684.152-.15.336-.392.504-.588.168-.196.224-.336.336-.56.113-.224.056-.42-.028-.588-.084-.168-.757-1.82-1.037-2.492-.272-.652-.549-.564-.757-.576l-.644-.012a1.236 1.236 0 0 0-.896.42c-.308.336-1.176 1.148-1.176 2.8 0 1.652 1.204 3.248 1.372 3.472.168.224 2.364 3.612 5.728 5.068.8.344 1.424.548 1.912.704.804.252 1.536.216 2.114.132.644-.096 1.988-.812 2.268-1.596.28-.784.28-1.456.196-1.596-.084-.14-.308-.224-.644-.392Z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#25D366", opacity: 0.3, animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
    </button>
  );
};

export default WhatsAppButton;
