import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Star, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import LGPDForm from "@/components/LGPDForm";

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);

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
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 text-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
              <span className="text-3xl font-bold text-white">S</span>
            </div>
            <div className="text-2xl font-bold text-primary">SCALIUM AI</div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            SCALIUM.AI — Atendimento IA especializado em{" "}
            <span className="text-primary">medicina premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            A primeira Inteligência Artificial de atendimento desenvolvida exclusivamente para institutos médicos e clínicas de alto padrão. 
            Transforme seu atendimento em uma máquina de agendamentos 24/7.
          </p>
          
          <Badge variant="secondary" className="mb-8 text-lg px-6 py-2">
            Se seu instituto opera com pelo menos R$ 100K/mês… oportunidade de integrar tecnologia pioneira…
          </Badge>
          
          <Dialog open={showDemo} onOpenChange={setShowDemo}>
            <DialogTrigger asChild>
              <Button size="lg" className="text-xl px-8 py-4 mb-8">
                Agendar Demo da IA em Funcionamento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <LGPDForm onClose={() => setShowDemo(false)} />
            </DialogContent>
          </Dialog>

          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <div className="text-4xl font-bold text-primary mb-2">+1.541%</div>
            <div className="text-sm text-muted-foreground">de crescimento em geração de leads desde a ativação</div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-8 border-2 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-4">{result.number}</div>
                  <p className="text-muted-foreground">{result.label}</p>
                </CardContent>
              </Card>
            ))}
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
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <pillar.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Cases de sucesso comprovados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">{case_.title}</h3>
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-muted-foreground">{case_.before}</div>
                      <div className="text-sm">Antes</div>
                    </div>
                    <div className="text-accent">→</div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{case_.after}</div>
                      <div className="text-sm">Depois</div>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">+{case_.growth}%</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Como funciona em 4 etapas</h2>
          <div className="grid md:grid-cols-4 gap-8">
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Pronto para transformar seu atendimento?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="text-xl px-8 py-4">
                  Quero aumentar meus resultados
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <LGPDForm onClose={() => {}} />
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 text-center">
        <p className="text-sm text-muted-foreground">
          Conforme normas do CFM e ANVISA. Esta IA não realiza diagnóstico médico.
        </p>
      </footer>
    </div>
  );
};

export default Index;
