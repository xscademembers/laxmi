import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/5d92hp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-transform transition-shadow duration-300"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}

