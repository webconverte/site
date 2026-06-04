'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn } from '@/src/components/FadeIn';
import { Header } from '@/src/components/Header';
import heroImage from '@/src/assets/images/nutricionista_hero.png';
import {
  Menu,
  X,
  Brain,
  Smile,
  Apple,
  Activity,
  Ear,
  Star,
  TrendingDown,
  MousePointerClick,
  Globe,
  Award,
  Route,
  SearchCheck,
  Share2,
  Monitor,
  BarChart,
  Users,
  MessageCircle,
  TrendingUp,
  DollarSign,
  Moon,
  Medal,
  Heart,
  ChevronDown,
  Check,
  Stethoscope,
} from 'lucide-react';



export default function Page() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="bg-white pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none conversion-line"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            <FadeIn className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-full mb-6 md:mb-8">
                <div className="dot-guide"></div>
                <span className="text-azul-noite/80 text-sm font-medium tracking-wide uppercase">Marketing para Nutricionistas</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-azul-noite leading-tight mb-6 md:mb-8 text-balance">
                Nutricionistas merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-outline mb-8 md:mb-12 max-w-2xl leading-relaxed">
                Criamos sua presença digital de alto padrão para que sua especialidade seja vista, valorizada e escolhida todos os dias. Uma estrutura ideal para quem trabalha sozinho e quer lotar a agenda de consultório.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 md:mb-12">
                <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20na%20p%C3%A1gina%20de%20Nutricionistas%20e%20cliquei%20em%20%22Quero%20Lotar%20Minha%20Agenda%20de%20Consultas%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="bg-azul-noite text-white px-8 py-4 sm:px-10 sm:py-5 rounded-input font-bold text-base hover:shadow-[0_10px_30px_rgba(17,26,51,0.15)] transition-all active:scale-95 gap-2 flex items-center justify-center text-center">
                  Quero Lotar Minha Agenda de Consultas
                  <Stethoscope className="w-5 h-5 text-secondary-fixed" />
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-primary font-bold text-xl sm:text-2xl">180+</span>
                  <span className="text-outline text-[10px] sm:text-sm leading-tight">Profissionais<br/>Atendidos</span>
                </div>
                <div className="w-px h-8 sm:h-10 bg-outline-variant/50"></div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-primary font-bold text-xl sm:text-2xl">4.9</span>
                  <div className="flex flex-col">
                    <div className="flex text-secondary">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    </div>
                    <span className="text-outline text-[10px] sm:text-sm">Avaliação Média</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-5 relative">
              <div className="relative z-20 rounded-card overflow-hidden border-8 border-surface-container shadow-2xl">
                <div className="w-full aspect-[4/5] relative">
                  <Image 
                    src={heroImage}
                    alt="Profissional de Saúde"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-azul-noite/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/30">
                  <p className="text-primary font-bold text-lg mb-1">Presença Digital Profissional</p>
                  <p className="text-outline text-sm">Estruturas digitais que convertem curiosos em pacientes fidelizados.</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-primary/20 rounded-tr-[32px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary/20 rounded-bl-[32px]"></div>
            </FadeIn>
          </div>
        </section>

        

        {/* PROBLEMA SECTION */}
        <section className="py-16 md:py-24 bg-azul-noite text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="relative">
              <div className="rounded-card overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR-4-zhDvXTWrZHAgyJymu89C_Kg4JAzgFBe97K4_1-iY-AM6J9hjKSr-SSj2_WVGthRm8aLhXxZNubqfTqxFOkrDLGe_Q4iDnpie5LfARDzFfefZgI4Wq02yhCZRrOKz3nCNGTHC4FgJJjB6DjtLBMuKBrHFzTMIv0vNMdGWfXYPc8sRDMRtdzrLtf2UgheHRBen9L1clHC1v7PcepBV9wPCT1ahJaUUfhwQRgYe7LAEi77-pRyvDOVBjbwhVsHiRIQP_X76EqeZb"
                  alt="Acquisition challenges"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 right-1 sm:-bottom-6 sm:-right-2 md:-bottom-8 md:-right-8 glass-card p-5 sm:p-6 md:p-10 rounded-card border-secondary-fixed/20 max-w-[220px] sm:max-w-[280px] md:max-w-xs shadow-2xl">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary-fixed mb-1 sm:mb-2">40%</p>
                <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">A ocupação média de uma agenda sem estratégia digital profissional.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="md:pl-12 lg:pl-16">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">Você domina sua profissão, mas nunca ensinaram como <span className="text-secondary-fixed">atrair clientes.</span></h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/70 leading-relaxed">
                <p>A oscilação de agenda é o maior inimigo da sua paz financeira. Depender apenas de indicações ou postar fotos aleatórias no Instagram não é uma estratégia de crescimento.</p>
                <p>Enquanto você se dedica ao atendimento, a concorrência digital está avançando. É hora de transformar seu talento em uma marca desejada e lucrativa.</p>
              </div>
              <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-secondary-fixed flex shrink-0 items-center justify-center text-secondary-fixed">
                  <TrendingDown className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-white/50 italic text-sm md:text-base">Pare de depender da sorte e indicações esporádicas.</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SOLUÇÃO (MÁQUINA DE CAPTAÇÃO) */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none conversion-line"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
            <FadeIn>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-10 md:mb-16 text-balance">Construímos a sua Máquina de Captação Digital.</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: MousePointerClick, title: 'Posicionamento', desc: 'Definição clara de quem você atende e por que você é a melhor escolha.' },
                { icon: Globe, title: 'Presença', desc: 'Sites e perfis otimizados que transmitem profissionalismo imediato.' },
                { icon: Award, title: 'Autoridade', desc: 'Conteúdo estratégico que educa seu público e constrói confiança real.' },
                { icon: Route, title: 'Conversão', desc: 'Caminhos curtos e eficientes para o cliente agendar com você agora.' }
              ].map((item, i) => (
                <div key={i} className="p-8 md:p-10 h-full bg-white rounded-card shadow-xl shadow-azul-noite/5 border-b-4 border-secondary/20 hover:border-secondary transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-6 md:mb-8 mx-auto text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-azul-noite mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-outline text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section className="py-16 md:py-24 bg-surface-container-low" id="metodo">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeIn className="text-center mb-10 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-azul-noite mb-4 md:mb-6">Ecossistema de Conversão.</h2>
              <p className="text-outline text-base md:text-lg max-w-2xl mx-auto">Não é apenas tráfego pago, é uma estrutura completa para transformar atenção em faturamento.</p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20">
              {[
                { icon: Route, label: 'Planejamento estratégico' },
                { icon: SearchCheck, label: 'Perfil no Google Empresa' },
                { icon: Share2, label: 'Redes sociais' },
                { icon: Monitor, label: 'Blog e Landing page' },
                { icon: MousePointerClick, label: 'Anúncios pagos' },
                { icon: BarChart, label: 'Análise de dados' },
                { icon: Users, label: 'Mentoria e consultoria' },
                { icon: MessageCircle, label: 'Atendimento comercial' }
              ].map((item, i) => (
                <div key={i} className="h-full p-5 sm:p-6 md:p-8 bg-surface-container-lowest rounded-2xl text-center hover:bg-azul-noite hover:text-white transition-all group">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto text-primary group-hover:text-secondary-fixed mb-3 md:mb-4" />
                  <h4 className="font-bold text-xs sm:text-sm md:text-base leading-tight">{item.label}</h4>
                </div>
              ))}
            </div>
            <FadeIn className="text-center">
              <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20na%20p%C3%A1gina%20de%20Nutricionistas%20e%20cliquei%20em%20%22Quero%20Implementar%20esse%20Ecossistema%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-azul-noite text-white px-8 md:px-12 py-4 md:py-5 rounded-input font-bold text-base md:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center text-center">
                Quero Implementar esse Ecossistema
              </a>
            </FadeIn>
          </div>
        </section>

        {/* JORNADA (Network Flow) */}
        <section className="py-16 md:py-24 overflow-hidden relative bg-gradient-to-b from-[#0a1120] to-[#041847]">
          <div className="absolute inset-0 bg-[#c0f366] opacity-[0.015] bg-[radial-gradient(#c0f366_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20 text-center relative z-20">
            <FadeIn>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white">O caminho até o agendamento não é linear.</h2>
              <p className="text-white/60 mt-6 max-w-3xl mx-auto">Conectamos todos os pontos de contato para garantir que nenhuma oportunidade seja perdida.</p>
            </FadeIn>
          </div>
          
          <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-8 relative">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9]">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                 {[
                   ['google', 'anuncio'], ['google', 'instagram'], ['google', 'whatsapp'], ['google', 'site'],
                   ['anuncio', 'blog'], ['anuncio', 'instagram'], ['anuncio', 'whatsapp'],
                   ['blog', 'site'], ['blog', 'instagram'], ['blog', 'whatsapp'],
                   ['site', 'instagram'], ['site', 'whatsapp'],
                   ['instagram', 'whatsapp']
                 ].map(([startId, endId], i) => {
                    const nodes = [
                      { id: 'google', x: 12, y: 30 },
                      { id: 'anuncio', x: 28, y: 18 },
                      { id: 'blog', x: 72, y: 18 },
                      { id: 'site', x: 88, y: 30 },
                      { id: 'instagram', x: 50, y: 40 },
                      { id: 'whatsapp', x: 50, y: 85 }
                    ];
                    const start = nodes.find(n => n.id === startId)!;
                    const end = nodes.find(n => n.id === endId)!;
                    return (
                      <line 
                        key={i}
                        x1={`${start.x}%`} 
                        y1={`${start.y}%`} 
                        x2={`${end.x}%`} 
                        y2={`${end.y}%`} 
                        className="stroke-[#c0f366] opacity-15" 
                        strokeWidth="1"
                      />
                    );
                 })}
              </svg>
              
              <div className="absolute top-[48%] left-[22%] w-[3px] h-[3px] rounded-full bg-[#c0f366]/40 blur-[0.5px]"></div>
              <div className="absolute top-[62%] left-[38%] w-[3px] h-[3px] rounded-full bg-[#c0f366]/40 blur-[0.5px]"></div>
              <div className="absolute top-[62%] right-[38%] w-[3px] h-[3px] rounded-full bg-[#c0f366]/40 blur-[0.5px]"></div>
              <div className="absolute top-[48%] right-[22%] w-[3px] h-[3px] rounded-full bg-[#c0f366]/40 blur-[0.5px]"></div>

              {[
                { id: 'google', label: 'Google', x: 12, y: 30 },
                { id: 'anuncio', label: 'Anúncio', x: 28, y: 18 },
                { id: 'blog', label: 'Blog', x: 72, y: 18 },
                { id: 'site', label: 'Site', x: 88, y: 30 },
                { id: 'instagram', label: 'Instagram', x: 50, y: 40 },
                { id: 'whatsapp', label: 'WhatsApp', x: 50, y: 85 }
              ].map((node) => (
                 <div 
                   key={node.id} 
                   className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105 cursor-default z-10"
                   style={{ left: `${node.x}%`, top: `${node.y}%` }}
                 >
                   <div className="bg-[#0b1222]/90 border border-[#c0f366] text-[#c0f366] rounded-full px-5 md:px-8 py-2 md:py-2.5 shadow-[0_0_15px_rgba(192,243,102,0.15)] flex justify-center items-center backdrop-blur-sm">
                     <span className="font-body font-medium text-[11px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap">{node.label}</span>
                   </div>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPÇÕES */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-azul-noite mb-6">Como podemos acelerar os seus resultados</h2>
                <p className="text-outline text-lg">Soluções adaptadas ao estágio atual do seu negócio, sempre com foco em retorno sobre investimento.</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="h-full bg-surface-container-low p-6 sm:p-8 md:p-12 rounded-[2rem] border border-outline-variant/30 flex flex-col hover:border-azul-noite/30 transition-all duration-300">
                <div className="mb-8">
                  <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-azul-noite mb-4">Implementação do Método Agenda Previsível</h3>
                  <p className="text-outline text-lg leading-relaxed">
                    Construímos do zero todo o seu ecossistema digital para que você seja encontrado pelo seu paciente ideal.
                    Uma estrutura profissional que cria posicionamento claro e gera demanda constantemente.
                  </p>
                </div>
                
                <div className="mb-10 space-y-4 flex-grow">
                   {[
                     'Planejamento Estratégico do negócio',
                     'Configuração e otimização do Google Meu Negócio',
                     'Criação de Site, Blog, Link da Bio e Quiz',
                     'Instagram Otimizado (Bio, Destaques, Posts Fixados)',
                     'Treinamento e mentoria Instagram Turbo',
                     'Otimização e roteiros para WhatsApp Business',
                     'Dashboard de performance automatizado',
                     'Acompanhamento semanal com encontros e relatórios'
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-azul-noite/5 flex items-center justify-center shrink-0 mt-0.5">
                         <Check className="w-4 h-4 text-azul-noite" />
                       </div>
                       <p className="text-azul-noite/80 font-medium">{feature}</p>
                     </div>
                   ))}
                </div>

                <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20na%20p%C3%A1gina%20de%20Nutricionistas%20e%20cliquei%20em%20%22Quero%20implementar%20o%20m%C3%A9todo%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="w-full py-4 sm:py-5 md:py-6 px-2 sm:px-4 border-2 border-azul-noite text-azul-noite rounded-input font-bold text-[15px] sm:text-lg hover:bg-azul-noite hover:text-white transition-all flex items-center justify-center text-center">
                  Quero implementar o método
                </a>
              </div>
              
              <div className="h-full bg-azul-noite p-6 sm:p-8 md:p-12 rounded-[2rem] relative overflow-hidden flex flex-col shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-fixed/10 blur-[60px] pointer-events-none"></div>
                
                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center justify-center bg-secondary-fixed text-azul-noite font-extrabold text-[10px] sm:text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                    Mais Recomendado
                  </div>
                  <h3 className="font-headline text-3xl font-extrabold text-white mb-4">Gestão de Tráfego e Conteúdo</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Você já tem uma agenda faturando alto, mas quer alavancar ainda mais e não tem tempo para o digital?
                    Torne a nossa equipe o seu novo setor de marketing de alta performance, delegando 100% da sua captação.
                  </p>
                </div>

                <div className="relative z-10 mb-10 space-y-4 flex-grow">
                   {[
                     'Planejamento estratégico do calendário editorial',
                     'Criação completa de todos os conteúdos',
                     'Publicação otimizada nos canais digitais',
                     'Gestão avançada de tráfego pago',
                     'Análise aprofundada dos resultados',
                     'Criação de relatórios e reunião semanal'
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-secondary-fixed/20 flex items-center justify-center shrink-0 mt-0.5">
                         <Check className="w-4 h-4 text-secondary-fixed" />
                       </div>
                       <p className="text-white/90 font-medium">{feature}</p>
                     </div>
                   ))}
                </div>

                <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20na%20p%C3%A1gina%20de%20Nutricionistas%20e%20cliquei%20em%20%22Terceirizar%20minha%20capta%C3%A7%C3%A3o%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full py-4 sm:py-5 md:py-6 px-2 sm:px-4 bg-secondary-fixed text-azul-noite rounded-input font-bold text-[15px] sm:text-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center text-center">
                  Terceirizar minha captação
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-surface-container" id="faq">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <FadeIn>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-azul-noite text-center mb-10 md:mb-16">Dúvidas Frequentes</h2>
            </FadeIn>
            <div className="space-y-3 md:space-y-4">
              {[
                { q: 'Quanto tempo leva para ver os primeiros resultados?', a: 'Depende da maturidade da sua estrutura atual, mas geralmente as primeiras conversões acontecem entre a segunda e quarta semana após o início das campanhas oficiais.' },
                { q: 'Preciso gravar vídeos para ter resultado?', a: 'Vídeos geram muito mais autoridade e conversão imediata. Nós fornecemos todos os scripts validados e orientações técnicas para que você se sinta confortável e transmita máxima autoridade.' },
                { q: 'A WebConverte respeita a ética do meu conselho?', a: 'Sim, seguimos rigorosamente os códigos de ética (CRP, etc). Fazemos um marketing informativo, elegante e baseado em evidências, sem ferir as normas vigentes.' },
              ].map((item, i) => (
                <details key={i} className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center p-5 md:p-8 cursor-pointer list-none font-bold text-base md:text-lg text-azul-noite hover:bg-azul-noite/5 transition-colors">
                    {item.q}
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 md:px-8 pb-5 md:pb-8 pt-0 text-outline text-sm md:text-base leading-relaxed border-t border-transparent group-open:border-outline-variant/20 group-open:pt-4 md:group-open:pt-6 mt-[-10px] md:mt-[-15px] transition-all">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* GANHOS */}
        <section className="py-xl bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
              
              {/* Resultados Práticos */}
              <div className="lg:w-1/2 bg-white p-8 md:p-14 lg:p-16 relative group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase mb-6 tracking-[0.15em]">Tangível</div>
                  <h3 className="font-headline text-3xl md:text-4xl font-extrabold text-azul-noite mb-12">Resultados Práticos</h3>
                  <ul className="space-y-10">
                    {[
                      { icon: TrendingUp, text: 'Aumento real na taxa de agendamento mensal com previsibilidade.' },
                      { icon: Users, text: 'Base de clientes qualificados que não questionam seu preço.' },
                      { icon: DollarSign, text: 'ROI positivo sobre o investimento em marketing digital.' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 group/item">
                        <div className="shrink-0 bg-surface-container p-3 rounded-2xl text-primary transition-colors duration-300 group-hover/item:bg-primary group-hover/item:text-white mt-1">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <p className="text-lg text-outline leading-relaxed pt-1.5">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resultados Emocionais */}
              <div className="lg:w-1/2 bg-azul-noite p-8 md:p-14 lg:p-16 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#0a1120]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-fixed/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary-fixed font-bold text-xs uppercase mb-6 tracking-[0.15em]">Intangível</div>
                  <h3 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-12">Resultados Emocionais</h3>
                  <ul className="space-y-10">
                    {[
                      { icon: Moon, text: 'Tranquilidade de saber de onde virá o próximo cliente amanhã.' },
                      { icon: Medal, text: 'Orgulho da sua presença digital profissional e de alto padrão.' },
                      { icon: Heart, text: 'Foco total no que você ama: atender e cuidar dos seus pacientes.' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 group/item">
                        <div className="shrink-0 bg-white/5 p-3 rounded-2xl text-secondary-fixed transition-colors duration-300 group-hover/item:bg-secondary-fixed group-hover/item:text-azul-noite mt-1">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed pt-1.5">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 md:py-24 lg:py-32 bg-azul-noite relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 conversion-line"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_#1a2a52_0%,_transparent_80%)] opacity-60"></div>
          
          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight text-balance">
                Você dedicou anos para dominar a sua área. <br className="hidden lg:block" />
                Agora, construa uma <span className="text-secondary-fixed">agenda previsível e lucrativa.</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                Pare de depender de indicações. Dê o primeiro passo para ter uma presença digital trabalhando dia e noite para lotar sua agenda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20na%20p%C3%A1gina%20de%20Nutricionistas%20e%20cliquei%20em%20%22Falar%20com%20um%20Especialista%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-secondary-fixed text-azul-noite rounded-input font-bold text-base md:text-lg hover:shadow-[0_0_40px_rgba(192,243,102,0.3)] hover:scale-105 active:scale-95 transition-all gap-3 flex items-center justify-center text-center">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  Falar com um Especialista
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-azul-noite border-t border-white/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="font-headline text-2xl md:text-3xl font-light text-center">
              <span className="text-secondary-fixed">WEB</span><span className="text-white">CONVERTE</span>
            </div>
            <p className="text-white/20 text-xs md:text-sm text-center">© 2024 WEBCONVERTE - Estratégias Digitais de Alta Performance.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
