import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTracking } from "@/hooks/useTracking";

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const WhatsAppButton = ({ 
  message, 
  className, 
  children, 
  variant = "default",
  size = "default" 
}: WhatsAppButtonProps) => {
  const { trackInteraction } = useTracking();
  
  const handleClick = () => {
    trackInteraction('whatsapp_click', 'whatsapp_button', children?.toString());
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/551151926333?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`gap-2 ${className || ''}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </Button>
  );
};

export default WhatsAppButton;