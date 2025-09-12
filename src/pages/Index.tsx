import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Star, TrendingUp, Clock, Shield, Zap, Instagram, Linkedin } from "lucide-react";
import LGPDForm from "@/components/LGPDForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useTracking } from "@/hooks/useTracking";

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);
  const { trackInteraction } = useTracking();

  useEffect(() => {
    trackInteraction('page_view', 'home_page');
    
    // Gerar session ID se não existir
    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', crypto.randomUUID());
    }
  }, [trackInteraction]);

  const results = [
    { number: "+1.541%", label: "Crescimento médio em geração de leads desde a primeira ativação" },
    { number: "24/7", label: "Atendimento consultivo sem custo de equipe adicional" },
    { number: "73%", label: "Taxa média de conversão em agendamentos qualificados" }
  ];

  const pillars = [
    { icon: Zap, title: "Cadência automatizada e inteligente" },
    { icon: Shield, title: "Integração com principais CRMs" },
    { icon: TrendingUp, title: "Memória infinita e evolução constante" },
    { icon: CheckCircle, title: "Prompts adaptados para medicina premium (CFM/ANVISA)" },
    { icon: Star, title: "Abordagem sob medida (SPIN, GPCT, RDO, BANT adaptado)" },
    { icon: Clock, title: "Conversas naturais sem traços robóticos" }
  ];

  const cases = [
    { title: "Cirurgia Plástica (SP)", before: 12, after: 47, growth: 292 },
    { title: "Dermatologia Estética (RJ)", before: 18, after: 73, growth: 306 },
    { title: "Implantodontia (BH)", before: 8, after: 34, growth: 325 }
  ];

  const guarantees = [
    "+200% em agendamentos em 30 dias ou dinheiro de volta",
    "Compliance total com normas médicas",
    "Integração garantida com seu CRM",
    "Atualizações contínuas incluídas",
    "Treinamento completo da equipe"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation - estilo Growth Machine */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" 
              alt="SCALIUM AI" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">SOLUÇÕES</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors">CASES</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">SOBRE</a>
          </nav>
          <Dialog open={showDemo} onOpenChange={setShowDemo}>
            <DialogTrigger asChild>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2"
                onClick={() => trackInteraction('click', 'header_cta', 'DIAGNÓSTICO GRATUITO')}
              >
                DIAGNÓSTICO GRATUITO
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <LGPDForm onClose={() => setShowDemo(false)} source="header_cta_button" />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section - estilo Growth Machine */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
            • A SOLUÇÃO IDEAL PARA SUA CLÍNICA
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            A única IA de Atendimento que te entrega{" "}
            <span className="text-primary block">mais receita</span>
            <span className="text-primary">menos esforço</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Implementamos um sistema de atendimento inteligente com IA especializada para transformar esforço em resultado previsível na medicina premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => trackInteraction('click', 'hero_primary_cta', 'DIAGNÓSTICO GRATUITO')}
                >
                  DIAGNÓSTICO GRATUITO →
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <LGPDForm onClose={() => {}} source="hero_primary_cta" />
              </DialogContent>
            </Dialog>
            
            <WhatsAppButton
              message="Quero saber como funciona Scalium AI"
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-2"
            >
              SAIBA MAIS
            </WhatsAppButton>
          </div>

          {/* Logos dos Clientes - estilo Growth Machine */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">CLÍNICAS QUE JÁ CONFIAM NA SCALIUM.AI</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">Cirurgia Plástica SP</div>
              <div className="text-lg font-semibold text-muted-foreground">Dermatologia RJ</div>
              <div className="text-lg font-semibold text-muted-foreground">Implantodontia BH</div>
              <div className="text-lg font-semibold text-muted-foreground">Estética PR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Section - estilo Growth Machine */}
      <section id="solucoes" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              • SOLUÇÕES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como a SCALIUM.AI resolve seus problemas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automatize o atendimento, qualifique leads e agende mais consultas com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-primary mb-4">{result.number}</div>
                  <p className="text-muted-foreground text-lg">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA adicional */}
          <div className="text-center">
            <WhatsAppButton
              message="Quero saber como funciona Scalium AI"
              size="lg"
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
            >
              Teste nossa IA agora mesmo
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-foreground mb-4">
            "Implementamos a SCALIUM.AI e tivemos +340% em leads qualificados em apenas 30 dias. 
            A precisão no atendimento médico é impressionante."
          </blockquote>
          <cite className="text-lg text-primary font-semibold">— Dr. Eduardo Martins, Cirurgião Plástico</cite>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Diferenciais únicos para medicina premium</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <pillar.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA adicional */}
          <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-6 py-3"
                  onClick={() => trackInteraction('click', 'pillars_cta', 'Quero uma demonstração personalizada')}
                >
                  Quero uma demonstração personalizada
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <LGPDForm onClose={() => {}} source="pillars_demo_button" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              • CASES DE SUCESSO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resultados reais de clínicas reais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja como a SCALIUM.AI transformou o atendimento dessas clínicas em máquinas de resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((case_, index) => (
              <Card key={index} className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">{case_.title}</h3>
                  <div className="flex justify-center items-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-1">{case_.before}</div>
                      <div className="text-sm text-muted-foreground">Antes</div>
                    </div>
                    <div className="text-primary text-2xl">→</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{case_.after}</div>
                      <div className="text-sm text-muted-foreground">Depois</div>
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">+{case_.growth}%</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA adicional */}
          <div className="text-center">
            <WhatsAppButton
              message="Quero saber como posso ter esses resultados na minha clínica"
              size="lg"
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
            >
              Como posso ter esses resultados?
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Como funciona em 4 etapas</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Configuração</h3>
              <p className="text-muted-foreground">48h para integrar com seus sistemas e personalizar para sua especialidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Definir ICP</h3>
              <p className="text-muted-foreground">Configurar perfil ideal de paciente e abordagem especializada</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Ativação 24/7</h3>
              <p className="text-muted-foreground">IA entra em funcionamento atendendo leads e agendando consultas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Otimização</h3>
              <p className="text-muted-foreground">Monitoramento e ajustes contínuos baseados em métricas</p>
            </div>
          </div>
          
          {/* CTA adicional */}
          <div className="text-center">
            <WhatsAppButton
              message="Quero começar a implementação hoje mesmo!"
              size="lg"
              className="text-lg px-6 py-3"
            >
              Quero começar hoje mesmo!
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Integra com seus sistemas atuais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">CRMs</h3>
                <p className="text-sm text-muted-foreground">HubSpot, Salesforce, Pipedrive, RD Station</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Agenda</h3>
                <p className="text-sm text-muted-foreground">Google Calendar, sistemas médicos</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Business API, templates aprovados</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Analytics</h3>
                <p className="text-sm text-muted-foreground">Métricas de conversão e ROI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Garantias que você pode confiar</h2>
          <div className="space-y-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - estilo Growth Machine */}
      <section className="py-32 px-4 bg-primary text-primary-foreground text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:30px_30px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Pronto para transformar<br />
            <span className="text-primary-foreground/90">seu atendimento?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
            Junte-se às clínicas que já multiplicaram seus resultados com a SCALIUM.AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-xl px-10 py-5 bg-white text-primary hover:bg-white/90"
                  onClick={() => trackInteraction('click', 'final_cta_demo', 'DIAGNÓSTICO GRATUITO')}
                >
                  DIAGNÓSTICO GRATUITO →
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <LGPDForm onClose={() => {}} source="final_cta_demo_button" />
              </DialogContent>
            </Dialog>
            <WhatsAppButton
              message="*Quero saber como você consegue levar minha clínica para o próximo nivel*"
              variant="outline"
              size="lg"
              className="text-xl px-10 py-5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              FALAR COM CONSULTOR
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" 
              alt="SCALIUM AI - IA PARA ESCALAR" 
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Conecte-se conosco</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/scalium_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Instagram className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-foreground">@scalium_ai</span>
            </a>
            <a
              href="https://linkedin.com/in/maykelmarques"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Linkedin className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-foreground">@maykelmarques</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Endereços</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>R.: Nuporanga, 97 – Vl Mariana<br />São Paulo, SP</p>
                <p>R.: Dr. Miguel Zacarias 56 Vl Progresso<br />Maringá - PR</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contatos</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>São Paulo: (11) 5192-6333</p>
                <p>Maringá: (44) 3346-8779</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Teste agora</h3>
              <WhatsAppButton
                message="Quero saber como funciona Scalium AI"
                variant="secondary"
                className="w-full"
              >
                Fale com nossa IA
              </WhatsAppButton>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Conforme normas do CFM e ANVISA. Esta IA não realiza diagnóstico médico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
