import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useTracking } from "@/hooks/useTracking";

interface LGPDFormProps {
  onClose: () => void;
  source?: string;
}

const LGPDForm = ({ onClose, source = "form_demo" }: LGPDFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    consent: false,
    marketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackLead } = useTracking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento obrigatório",
        description: "É necessário autorizar o tratamento dos dados para prosseguir.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - registra consentimento LGPD
    const consentRecord = {
      ...formData,
      ip: "127.0.0.1", // Em produção, capturar IP real
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      policyVersion: "1.0",
      baseLegal: "consentimento_explicito"
    };

    try {
      // Registrar lead no banco de dados
      await trackLead(
        formData.name,
        formData.email,
        formData.phone,
        `Clínica: ${formData.clinic}`,
        source
      );
      
      console.log("Registrando lead com consentimento LGPD:", consentRecord);
      
      toast({
        title: "Sucesso!",
        description: "Seus dados foram registrados. Entraremos em contato em breve para agendar sua demo."
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar os dados. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Agendar Demo Personalizada</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nome completo *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Dr(a). Seu Nome"
          />
        </div>

        <div>
          <Label htmlFor="email">E-mail profissional *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="contato@clinica.com.br"
          />
        </div>

        <div>
          <Label htmlFor="phone">WhatsApp *</Label>
          <Input
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <Label htmlFor="clinic">Nome da clínica/instituto *</Label>
          <Input
            id="clinic"
            required
            value={formData.clinic}
            onChange={(e) => setFormData(prev => ({ ...prev, clinic: e.target.value }))}
            placeholder="Instituto Médico"
          />
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
            />
            <Label htmlFor="consent" className="text-sm leading-5">
              <strong>Autorizo o tratamento dos meus dados pessoais</strong> pela SCALIUM.AI para as finalidades de:
              agendamento de demo, atendimento comercial e envio de propostas. 
              <a href="/politica-privacidade" className="text-primary underline" target="_blank">
                Política de Privacidade
              </a>
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing"
              checked={formData.marketing}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketing: !!checked }))}
            />
            <Label htmlFor="marketing" className="text-sm">
              Desejo receber conteúdos educativos sobre medicina premium e tecnologia (opcional)
            </Label>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting || !formData.consent}
        >
          {isSubmitting ? "Enviando..." : "Agendar Demo Gratuita"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Seus dados são protegidos conforme a LGPD. Você pode solicitar acesso, correção ou exclusão a qualquer momento.
      </p>
    </div>
  );
};

export default LGPDForm;