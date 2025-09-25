import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Star, TrendingUp, Clock, Shield, Zap, Instagram, Linkedin } from "lucide-react";
import LGPDForm from "@/components/LGPDForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useTracking } from "@/hooks/useTracking";

// Import custom icons
import alvoIcon from "@/assets/alvo-icon.png";
import cerebroIcon from "@/assets/cerebro-icon.png";
import tickIcon from "@/assets/tick-icon.png";
import fogueteIcon from "@/assets/foguete-icon.png";
import graficoIcon from "@/assets/grafico-icon.png";
import linkIcon from "@/assets/link-icon.png";
import engrenagemIcon from "@/assets/engrenagem-icon.png";
import relogioIcon from "@/assets/relogio-icon.png";
import tarefaIcon from "@/assets/tarefa-icon.png";
import graficoCrescimento from "@/assets/grafico-crescimento.png";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { trackInteraction } = useTracking();

  useEffect(() => {
    trackInteraction('page_view', 'home_page');
    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', crypto.randomUUID());
    }
  }, [trackInteraction]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const results = [
    {
      number: "+1.541%",
      description: "Crescimento médio em geração de leads desde a primeira ativação"
    },
    {
      number: "24/7", 
      description: "Atendimento consultivo sem custo de equipe adicional"
    },
    {
      number: "73%",
      description: "Taxa média de conversão em agendamentos qualificados"
    }
  ];

  const pillars = [
    {
      title: "Cadência Automatizada e Inteligente",
      subtitle: "Timing Estratégico Perfeito",
      icon: relogioIcon,
      description: "Segue cadência estruturada com espaçamento estratégico entre abordagens, garantindo contato no momento ideal.",
      features: [
        "Sequências personalizadas por perfil de lead",
        "Horários otimizados para medicina premium", 
        "Frequência adaptada ao comportamento do prospect",
        "Follow-ups inteligentes baseados em interações"
      ]
    },
    {
      title: "Integração com os Principais CRMs", 
      subtitle: "Conectividade Total",
      icon: linkIcon,
      description: "Compatível com diversos sistemas, conecta informações coletadas ao seu funil em tempo real, sem retrabalho.",
      features: [
        "Integração nativa com HubSpot, Salesforce, Pipedrive",
        "Sincronização automática de dados de contato",
        "Relatórios em tempo real no seu CRM",
        "Histórico completo de interações preservado"
      ]
    },
    {
      title: "Memória Infinita e Evolução Constante",
      subtitle: "Aprendizado Contínuo",
      icon: cerebroIcon,
      description: "Aprende com respostas dos leads, ajusta discurso, refina argumentos e aumenta conversão de forma autônoma.",
      features: [
        "Machine learning especializado em medicina",
        "Otimização automática de abordagens",
        "Identificação de padrões de objeções", 
        "Melhoria contínua da taxa de conversão"
      ]
    },
    {
      title: "Prompts Adaptados para Medicina Premium",
      subtitle: "Especialização Setorial",
      icon: alvoIcon,
      description: "Construímos prompts 100% alinhados ao mercado médico, com ajustes baseados no seu posicionamento real.",
      features: [
        "Linguagem médica adequada por especialidade",
        "Abordagem respeitosa para pacientes premium",
        "Compliance com normas do CFM e ANVISA",
        "Personalização por tipo de procedimento"
      ]
    },
    {
      title: "Abordagem Sob Medida para Cada Lead",
      subtitle: "Frameworks de Atendimento Médico",
      icon: tarefaIcon,
      description: "Utiliza SPIN Selling, GPCT e RDO adaptados para medicina, interpretando respostas e quebrando objeções estrategicamente.",
      features: [
        "Qualificação médica especializada (BANT adaptado)",
        "Descoberta de necessidades específicas de saúde",
        "Quebra de objeções comuns em medicina premium",
        "Condução natural para agendamento de consultas"
      ]
    },
    {
      title: "Conversas Naturais Sem Traços Robóticos",
      subtitle: "Experiência Humana Premium",
      icon: engrenagemIcon,
      description: "Voz feminina profissional, linguagem empática e condução fluida que transmite confiança e segurança.",
      features: [
        "Tom respeitoso adequado para medicina",
        "Empatia programada para situações sensíveis",
        "Linguagem clara e acessível para pacientes",
        "Personalidade que representa bem sua clínica"
      ]
    }
  ];

  const cases = [
    {
      company: "Instituto de Cirurgia Plástica",
      industry: "Cirurgia Estética",
      name: "Dr. Eduardo Martins - São Paulo",
      before: "12 agendamentos/mês",
      after: "47 agendamentos/mês (+292%)",
      testimonial: "Transformou completamente nosso atendimento."
    },
    {
      company: "Centro de Dermatologia Avançada", 
      industry: "Dermatologia Estética",
      name: "Dra. Patricia Santos - Rio de Janeiro",
      before: "18 consultas/mês",
      after: "73 consultas/mês (+306%)",
      testimonial: "Nunca imaginei que IA pudesse entender medicina assim."
    },
    {
      company: "Clínica Odontológica Premium",
      industry: "Implantodontia",
      name: "Dr. Ricardo Campos - Belo Horizonte", 
      before: "8 tratamentos/mês",
      after: "34 tratamentos/mês (+325%)",
      testimonial: "ROI foi recuperado na primeira semana."
    }
  ];

  const guarantees = [
    "+200% em agendamentos em 30 dias ou dinheiro de volta",
    "Compliance total com normas médicas",
    "Integração garantida com seu CRM",
    "Atualizações contínuas incluídas",
    "Treinamento completo da equipe"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" 
              alt="SCALIUM AI" 
              className="h-8 w-auto" 
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              SOLUÇÕES
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              CASES
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              SOBRE
            </button>
          </nav>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold" 
                onClick={() => trackInteraction('click', 'header_cta', 'Agendar Demo da IA em Funcionamento')}
              >
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
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary/5 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center pt-20 relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-montserrat font-bold mb-6 leading-tight">
              <span className="text-foreground">A Primeira </span>
              <span className="text-primary">Inteligência Artificial</span>
              <span className="text-foreground"> de Atendimento</span>
              <br />
              <span className="text-accent">Desenvolvida Exclusivamente</span>
              <br />
              <span className="text-foreground">Para Clínicas e Institutos Médicos de </span>
              <span className="text-primary">Alto Padrão</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              Escale suas vendas deixando o trabalho repetitivo com a
              <br />
              Atendimento IA especializada em medicina
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              A primeira Inteligência Artificial de atendimento desenvolvida especificamente
              <br />
              para institutos médicos e clínicas de alto padrão, transforme o seu atendimento em uma máquina de agendamento 24/7.
            </p>
          </div>

          <div className="animate-fade-in mb-8" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Demo da IA em Funcionamento
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 text-muted-foreground text-center mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-2">
              <img src={graficoIcon} alt="Gráfico" className="w-5 h-5" />
              +1.541% de crescimento em geração de leads
            </span>
            <span className="flex items-center gap-2">
              <img src={alvoIcon} alt="Alvo" className="w-5 h-5" />
              Especializada em medicina premium
            </span>
            <span className="flex items-center gap-2">
              <img src={cerebroIcon} alt="Cérebro" className="w-5 h-5" />
              Primeira Atendimento IA especializada no setor de saúde de alto padrão no Brasil
            </span>
          </div>

          <div className="mt-16 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border flex-1">
              <p className="text-base md:text-lg leading-relaxed">
                Se seu instituto médico ou clínica opera com pelo menos R$ 100K mensais,
                <br />
                mas possui infraestrutura e expertise para patamares superiores, esta é
                <br />
                uma oportunidade de integrar tecnologia pioneira que revoluciona o atendimento
                <br />
                na medicina premium.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://wa.me/551151926333?text=*Quero%20saber%20como%20voc%C3%AA%20consegue%20levar%20minha%20cl%C3%ADnica%20para%20o%20pr%C3%B3ximo%20nivel*"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={graficoCrescimento} 
                  alt="Gráfico de crescimento" 
                  className="w-64 h-auto cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Resultados de Clínicas e Institutos que Adotaram o Atendimento IA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
                <div className="text-5xl font-montserrat font-bold text-primary mb-4">{result.number}</div>
                <p className="text-lg text-muted-foreground">{result.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card border-2 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
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
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero Conhecer a IA SCALIUM
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Conheça os Pilares que Tornam a SCALIUM.AI uma Máquina de Conversão
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Nossa Atendimento IA foi desenvolvida especificamente para medicina premium, 
              combinando frameworks de atendimento comprovados com conhecimento 
              especializado do setor de saúde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={pillar.icon} alt={pillar.title} className="w-8 h-8" />
                    <h4 className="text-md text-primary font-semibold">{pillar.subtitle}</h4>
                  </div>
                  <h3 className="text-lg font-montserrat font-bold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Demonstração Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Como o Atendimento IA SCALIUM Transforma Seu Atendimento
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={engrenagemIcon} alt="Configuração" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">Configuração Especializada</h3>
              <p className="text-muted-foreground">Configuramos a IA com seus dados, especialidade médica e perfil de paciente ideal em 48 horas.</p>
              <div className="text-primary font-semibold mt-2">Setup médico personalizado</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={alvoIcon} alt="Definição ICP" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">Definição de ICP Médico</h3>
              <p className="text-muted-foreground">Mapeamos seu Cliente Ideal (ICP) considerando especialidade, faixa etária e poder aquisitivo.</p>
              <div className="text-primary font-semibold mt-2">Segmentação inteligente</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={fogueteIcon} alt="Ativação" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">Ativação do Atendimento IA</h3>
              <p className="text-muted-foreground">Atendimento IA inicia resposta automatizada 24/7 para todos os leads que chegam pelos seus canais.</p>
              <div className="text-primary font-semibold mt-2">Operação contínua</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={graficoIcon} alt="Resultados" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">Resultados e Otimização</h3>
              <p className="text-muted-foreground">Acompanhe métricas em tempo real e receba agendamentos qualificados direto na agenda.</p>
              <div className="text-primary font-semibold mt-2">Conversão garantida</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Minha Implementação Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Por Que a SCALIUM.AI é Pioneira no Mercado de Saúde?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold mb-8">
                Somos os PRIMEIROS a desenvolver um Atendimento IA especificamente para medicina premium, 
                com conhecimento setorial profundo e compliance médico integrado.
              </h3>
              <div className="space-y-4">
                {[
                  "Especialização exclusiva em medicina premium",
                  "Compliance automático com normas do CFM",
                  "Linguagem médica adequada por especialidade", 
                  "Abordagem respeitosa para pacientes sensíveis",
                  "Integração com sistemas de gestão médica",
                  "Conhecimento de sazonalidades do setor"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                      <img src={tickIcon} alt="Check" className="w-4 h-4" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-montserrat font-bold mb-6 text-center">SCALIUM.AI vs ATENDIMENTO GENÉRICO</h4>
              <div className="space-y-4">
                {[
                  { label: "Especialização:", scalium: "Medicina", generic: "Geral" },
                  { label: "Compliance:", scalium: "Médico", generic: "Básico" },
                  { label: "Linguagem:", scalium: "Setorial", generic: "Genérica" },
                  { label: "Abordagem:", scalium: "Empática", generic: "Comercial" },
                  { label: "Conhecimento:", scalium: "Profundo", generic: "Superficial" },
                  { label: "Resultados:", scalium: "Comprovados", generic: "Estimados" }
                ].map((comparison, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">{comparison.label}</span>
                    <span className="text-primary font-semibold">{comparison.scalium}</span>
                    <span className="text-muted-foreground">vs {comparison.generic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              De 12 para 47 Agendamentos: Institutos que Multiplicaram Resultados com Nossa Atendimento IA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
                <CardContent className="p-0">
                  <h3 className="text-lg font-montserrat font-bold mb-2">{caseStudy.company}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{caseStudy.name}</p>
                  <p className="text-sm text-primary mb-4">Especialidade: {caseStudy.industry}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm">ANTES:</span>
                      <span className="font-semibold">{caseStudy.before}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">DEPOIS:</span>
                      <span className="font-semibold text-primary">{caseStudy.after}</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm italic text-muted-foreground">
                    "{caseStudy.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero Resultados Como Estes
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Integração Simples com Seus Sistemas de CRM Atuais
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { name: "HubSpot", description: "Sincronização completa de leads, histórico e pipeline de vendas" },
              { name: "Salesforce", description: "Integração nativa com maior CRM médico do mercado" },
              { name: "Pipedrive", description: "Conexão direta com funil de vendas simplificado" },
              { name: "RD Station", description: "Automação de marketing integrada com Atendimento IA" }
            ].map((crm, index) => (
              <Card key={index} className="p-6 text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
                <div className="text-2xl mb-2">
                  <img src={linkIcon} alt="CRM Integration" className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-montserrat font-bold mb-2">{crm.name}</h3>
                <p className="text-sm text-muted-foreground">{crm.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Prontuário Eletrônico", description: "Integração com principais sistemas de gestão médica" },
              { name: "Agendamento Online", description: "Conexão com calendários e sistemas de consultas" },
              { name: "WhatsApp Business", description: "Integração com atendimento via WhatsApp institucional" },
              { name: "Analytics Médicos", description: "Relatórios específicos para métricas de saúde" }
            ].map((system, index) => (
              <Card key={index} className="p-6 text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
                <div className="text-2xl mb-2">
                  <img src={cerebroIcon} alt="Medical Systems" className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-montserrat font-bold mb-2">{system.name}</h3>
                <p className="text-sm text-muted-foreground">{system.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Garantias e Suporte Especializado em Medicina
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-8">GARANTIAS OFERECIDAS:</h3>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                      <img src={tickIcon} alt="Check" className="w-4 h-4" />
                    </div>
                    <span className="text-lg">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-8">SUPORTE ESPECIALIZADO:</h3>
              <div className="space-y-4">
                {[
                  { icon: cerebroIcon, text: "Equipe com conhecimento médico" },
                  { icon: relogioIcon, text: "Suporte técnico 24/7 especializado" },
                  { icon: tarefaIcon, text: "Treinamentos mensais da equipe" },
                  { icon: graficoIcon, text: "Consultoria estratégica incluída" },
                  { icon: engrenagemIcon, text: "Otimizações contínuas gratuitas" },
                  { icon: graficoIcon, text: "Relatórios médicos personalizados" }
                ].map((support, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img src={support.icon} alt={support.text} className="w-6 h-6 mt-1" />
                    <span className="text-lg">{support.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-8">
            Pronto Para Transformar Seu Atendimento em uma Máquina de Agendamentos?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Demo da IA em Funcionamento
            </Button>
            
            <a
              href="https://wa.me/551151926333?text=*Quero%20saber%20como%20voc%C3%AA%20consegue%20levar%20minha%20cl%C3%ADnica%20para%20o%20pr%C3%B3ximo%20nivel*"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] border-2 border-[#25D366] px-8 py-4 rounded-lg font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/3c84c696-bd8e-474e-9329-a64d865861ba.png" 
                alt="SCALIUM AI" 
                className="h-8 w-auto mb-4" 
              />
              <p className="text-sm opacity-80">
                A primeira IA de atendimento desenvolvida especificamente para medicina premium.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <p>(44) 3346-8779</p>
                <a 
                  href="https://wa.me/551151926333?text=*Quero%20saber%20como%20voc%C3%AA%20consegue%20levar%20minha%20cl%C3%ADnica%20para%20o%20pr%C3%B3ximo%20nivel*" 
                  className="block hover:text-primary transition-colors"
                >
                  WhatsApp: (11) 5192-6333
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Soluções</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('solucoes')} className="block hover:text-primary transition-colors">
                  Atendimento IA
                </button>
                <button onClick={() => scrollToSection('cases')} className="block hover:text-primary transition-colors">
                  Cases de Sucesso
                </button>
                <button onClick={() => scrollToSection('sobre')} className="block hover:text-primary transition-colors">
                  Sobre a SCALIUM
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 SCALIUM.AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;