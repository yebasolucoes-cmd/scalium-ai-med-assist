import { MessageCircle } from "lucide-react";
import { useTracking } from "@/hooks/useTracking";

const WhatsAppButton = () => {
  const { trackInteraction } = useTracking();
  
  const handleClick = () => {
    trackInteraction('whatsapp_click', 'whatsapp_floating_button', 'floating_whatsapp');
    window.open('https://wa.me/551151926333?text=*Quero%20saber%20como%20voc%C3%AA%20consegue%20levar%20minha%20cl%C3%ADnica%20para%20o%20pr%C3%B3ximo%20nivel*', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;