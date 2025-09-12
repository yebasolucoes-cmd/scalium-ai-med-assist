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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    trackInteraction
  } = useTracking();
  useEffect(() => {
    trackInteraction('page_view', 'home_page');

    // Gerar session ID se não existir
    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', crypto.randomUUID());
    }
  }, [trackInteraction]);
  const results = [{
    number: "+1.541%",
    description: "Crescimento médio em geração de leads desde a primeira ativação"
  }, {
    number: "24/7",
    description: "Atendimento consultivo sem custo de equipe adicional"
  }, {
    number: "73%",
    description: "Taxa média de conversão em agendamentos qualificados"
  }];
  const pillars = [{
    title: "Cadência Automatizada e Inteligente",
    subtitle: "⏰ Timing Estratégico Perfeito",
    description: "Segue cadência estruturada com espaçamento estratégico entre abordagens, garantindo contato no momento ideal.",
    features: ["Sequências personalizadas por perfil de lead", "Horários otimizados para medicina premium", "Frequência adaptada ao comportamento do prospect", "Follow-ups inteligentes baseados em interações"]
  }, {
    title: "Integração com os Principais CRMs",
    subtitle: "🔗 Conectividade Total",
    description: "Compatível com diversos sistemas, conecta informações coletadas ao seu funil em tempo real, sem retrabalho.",
    features: ["Integração nativa com HubSpot, Salesforce, Pipedrive", "Sincronização automática de dados de contato", "Relatórios em tempo real no seu CRM", "Histórico completo de interações preservado"]
  }, {
    title: "Memória Infinita e Evolução Constante",
    subtitle: "🧠 Aprendizado Contínuo",
    description: "Aprende com respostas dos leads, ajusta discurso, refina argumentos e aumenta conversão de forma autônoma.",
    features: ["Machine learning especializado em medicina", "Otimização automática de abordagens", "Identificação de padrões de objeções", "Melhoria contínua da taxa de conversão"]
  }, {
    title: "Prompts Adaptados para Medicina Premium",
    subtitle: "🎯 Especialização Setorial",
    description: "Construímos prompts 100% alinhados ao mercado médico, com ajustes baseados no seu posicionamento real.",
    features: ["Linguagem médica adequada por especialidade", "Abordagem respeitosa para pacientes premium", "Compliance com normas do CFM e ANVISA", "Personalização por tipo de procedimento"]
  }, {
    title: "Abordagem Sob Medida para Cada Lead",
    subtitle: "📋 Frameworks de Atendimento Médico",
    description: "Utiliza SPIN Selling, GPCT e RDO adaptados para medicina, interpretando respostas e quebrando objeções estrategicamente.",
    features: ["Qualificação médica especializada (BANT adaptado)", "Descoberta de necessidades específicas de saúde", "Quebra de objeções comuns em medicina premium", "Condução natural para agendamento de consultas"]
  }, {
    title: "Conversas Naturais Sem Traços Robóticos",
    subtitle: "🗣️ Experiência Humana Premium",
    description: "Voz feminina profissional, linguagem empática e condução fluida que transmite confiança e segurança.",
    features: ["Tom respeitoso adequado para medicina", "Empatia programada para situações sensíveis", "Linguagem clara e acessível para pacientes", "Personalidade que representa bem sua clínica"]
  }];
  const cases = [{
    company: "Instituto de Cirurgia Plástica",
    industry: "Cirurgia Estética",
    name: "Dr. Eduardo Martins - São Paulo",
    before: "12 agendamentos/mês",
    after: "47 agendamentos/mês (+292%)",
    testimonial: "Transformou completamente nosso atendimento."
  }, {
    company: "Centro de Dermatologia Avançada",
    industry: "Dermatologia Estética",
    name: "Dra. Patricia Santos - Rio de Janeiro",
    before: "18 consultas/mês",
    after: "73 consultas/mês (+306%)",
    testimonial: "Nunca imaginei que IA pudesse entender medicina assim."
  }, {
    company: "Clínica Odontológica Premium",
    industry: "Implantodontia",
    name: "Dr. Ricardo Campos - Belo Horizonte",
    before: "8 tratamentos/mês",
    after: "34 tratamentos/mês (+325%)",
    testimonial: "ROI foi recuperado na primeira semana."
  }];
  const guarantees = ["+200% em agendamentos em 30 dias ou dinheiro de volta", "Compliance total com normas médicas", "Integração garantida com seu CRM", "Atualizações contínuas incluídas", "Treinamento completo da equipe"];
  return <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" alt="SCALIUM AI" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">SOLUÇÕES</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors">CASES</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">SOBRE</a>
          </nav>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2" onClick={() => trackInteraction('click', 'header_cta', 'Agendar Demo da IA em Funcionamento')}>
                Agendar Demo da IA em Funcionamento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <LGPDForm onClose={() => setIsDialogOpen(false)} source="header_cta_button" />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A Primeira Inteligência Artificial de Atendimento<br />
            <span className="text-primary">Desenvolvida Exclusivamente</span><br />
            Para Clínicas e Institutos Médicos de Alto Padrão
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Escale suas vendas deixando o trabalho repetitivo com a<br />
            Atendimento IA especializada em medicina
          </p>

          <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed opacity-80">
            A primeira Inteligência Artificial de atendimento desenvolvida especificamente<br />
            para institutos médicos e clínicas de alto padrão, transforme o seu atendimento em uma máquina de agendamento 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
              Agendar Demo da IA em Funcionamento
            </Button>
            
            <div className="flex flex-col items-center gap-2 text-muted-foreground text-center">
              <span>⭐ +1.541% de crescimento em geração de leads</span>
              <span>✨ Especializada em medicina premium</span>
              <span>🏥 Primeira Atendimento IA especializada no setor de saúde de alto padrão no Brasil</span>
            </div>
          </div>

          <div className="mt-16 bg-card/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto border border-border">
            <p className="text-lg leading-relaxed">
              Se seu instituto médico ou clínica opera com pelo menos R$ 100K mensais,<br />
              mas possui infraestrutura e expertise para patamares superiores, esta é<br />
              uma oportunidade de integrar tecnologia pioneira que revoluciona o atendimento<br />
              na medicina premium.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Resultados de Clínicas e Institutos que Adotaram o Atendimento IA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => <Card key={index} className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl font-bold text-primary mb-4">{result.number}</div>
                <p className="text-lg text-muted-foreground">{result.description}</p>
              </Card>)}
          </div>

          <div className="mt-16 bg-card border-2 rounded-lg p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl italic mb-4 text-center">
              "A SCALIUM.AI revolucionou nosso atendimento. É como ter uma atendente que nunca 
              dorme, nunca tem dia ruim e entende perfeitamente nosso mercado médico. 
              Os resultados superaram todas as expectativas em apenas 30 dias."
            </blockquote>
            <div className="text-center">
              <div className="font-bold">Dr. Eduardo Martins, Diretor Comercial</div>
              <div className="text-muted-foreground">Instituto de Cirurgia Plástica Avançada - São Paulo</div>
              <div className="text-primary font-semibold mt-2">Resultado: +340% em leads qualificados</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-8 py-6">
              Quero Conhecer a IA SCALIUM
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Conheça os Pilares que Tornam a SCALIUM.AI uma Máquina de Conversão
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Nossa Atendimento IA foi desenvolvida especificamente para medicina premium, 
              combinando frameworks de atendimento comprovados com conhecimento 
              especializado do setor de saúde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <h4 className="text-md text-primary mb-4">{pillar.subtitle}</h4>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-16">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-8 py-6">
              Agendar Demonstração Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como o Atendimento IA SCALIUM Transforma Seu Atendimento
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Configuração Especializada</h3>
              <p className="text-muted-foreground">Configuramos a IA com seus dados, especialidade médica e perfil de paciente ideal em 48 horas.</p>
              <div className="text-primary font-semibold mt-2">Setup médico personalizado</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Definição de ICP Médico</h3>
              <p className="text-muted-foreground">Mapeamos seu Cliente Ideal (ICP) considerando especialidade, faixa etária e poder aquisitivo.</p>
              <div className="text-primary font-semibold mt-2">Segmentação inteligente</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ativação do Atendimento IA</h3>
              <p className="text-muted-foreground">Atendimento IA inicia resposta automatizada 24/7 para todos os leads que chegam pelos seus canais.</p>
              <div className="text-primary font-semibold mt-2">Operação contínua</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados e Otimização</h3>
              <p className="text-muted-foreground">Acompanhe métricas em tempo real e receba agendamentos qualificados direto na agenda.</p>
              <div className="text-primary font-semibold mt-2">Conversão garantida</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-8 py-6">
              Começar Minha Implementação Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por Que a SCALIUM.AI é Pioneira no Mercado de Saúde?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Somos os PRIMEIROS a desenvolver um Atendimento IA especificamente para medicina premium, com conhecimento setorial profundo e compliance médico integrado.</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Especialização exclusiva em medicina premium</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Compliance automático com normas do CFM</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Linguagem médica adequada por especialidade</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Abordagem respeitosa para pacientes sensíveis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Integração com sistemas de gestão médica</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Conhecimento de sazonalidades do setor</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border-2">
              <h4 className="text-xl font-bold mb-6">SCALIUM.AI vs ATENDIMENTO GENÉRICO</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Especialização:</span>
                  <span className="font-semibold text-primary">Medicina vs Geral</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Compliance:</span>
                  <span className="font-semibold text-primary">Médico vs Básico</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Linguagem:</span>
                  <span className="font-semibold text-primary">Setorial vs Genérica</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Abordagem:</span>
                  <span className="font-semibold text-primary">Empática vs Comercial</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Conhecimento:</span>
                  <span className="font-semibold text-primary">Profundo vs Superficial</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Resultados:</span>
                  <span className="font-semibold text-primary">Comprovados vs Estimados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              De 12 para 47 Agendamentos: Institutos que Multiplicaram Resultados com Nossa Atendimento IA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => <Card key={index} className="p-8 border-2 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2">{case_.company}</h3>
                  <div className="text-primary font-semibold mb-2">{case_.name}</div>
                  <div className="text-muted-foreground mb-4">Especialidade: {case_.industry}</div>
                  
                  <div className="space-y-2 mb-4">
                    <div><strong>ANTES:</strong> {case_.before}</div>
                    <div><strong>DEPOIS:</strong> {case_.after}</div>
                  </div>
                  
                  <blockquote className="italic text-muted-foreground">
                    "{case_.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-16">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-8 py-6">
              Quero Resultados Como Estes
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Integração Simples com Seus Sistemas de CRM Atuais
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">HubSpot</h3>
              <p className="text-sm text-muted-foreground">Sincronização completa de leads, histórico e pipeline de vendas</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">Salesforce</h3>
              <p className="text-sm text-muted-foreground">Integração nativa com maior CRM médico do mercado</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">Pipedrive</h3>
              <p className="text-sm text-muted-foreground">Conexão direta com funil de vendas simplificado</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">RD Station</h3>
              <p className="text-sm text-muted-foreground">Automação de marketing integrada com Atendimento IA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold mb-2">Prontuário Eletrônico</h3>
              <p className="text-sm text-muted-foreground">Integração com principais sistemas de gestão médica</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-bold mb-2">Agendamento Online</h3>
              <p className="text-sm text-muted-foreground">Conexão com calendários e sistemas de consultas</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold mb-2">WhatsApp Business</h3>
              <p className="text-sm text-muted-foreground">Integração com atendimento via WhatsApp institucional</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border-2 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Analytics Médicos</h3>
              <p className="text-sm text-muted-foreground">Relatórios específicos para métricas de saúde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Garantias e Suporte Especializado em Medicina
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">GARANTIAS OFERECIDAS:</h3>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">{guarantee}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-xl border-2 border-primary">
              <h3 className="text-2xl font-bold mb-6">SUPORTE ESPECIALIZADO:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <h4 className="font-bold">Equipe com conhecimento médico</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-bold">Suporte técnico 24/7 especializado</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="font-bold">Treinamentos mensais da equipe</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-bold">Consultoria estratégica incluída</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-bold">Otimizações contínuas gratuitas</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-bold">Relatórios médicos personalizados</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto Para Transformar Seu Atendimento em uma Máquina de Agendamentos?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-xl px-10 py-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
              AGENDAR DEMO GRATUITA
            </Button>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md">
              <LGPDForm onClose={() => setIsDialogOpen(false)} source="hero_button" />
            </DialogContent>
          </Dialog>
          <WhatsAppButton message="*Quero saber como você consegue levar minha clínica para o próximo nivel*" variant="outline" size="lg" className="text-xl px-10 py-5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
            Falar com Consultor
          </WhatsAppButton>

          <p className="text-muted-foreground mt-8">
            Especialistas em medicina premium • Compliance CFM • Resultados garantidos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" alt="SCALIUM AI" className="h-8 w-auto mb-4" />
              <p className="text-muted-foreground">
                A primeira IA de atendimento desenvolvida exclusivamente para medicina premium.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 contato@scaliumai.com.br</p>
                <p>📱 (11) 5192-6333</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SCALIUM.AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;