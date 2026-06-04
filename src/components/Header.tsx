'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [saudeMobileOpen, setSaudeMobileOpen] = React.useState(false);
  const [belezaMobileOpen, setBelezaMobileOpen] = React.useState(false);

  return (
    <>
      <header className="bg-[#041847] w-full top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-light">
            <span className="text-secondary-fixed">WEB</span><span className="text-white">CONVERTE</span>
          </Link>
          <nav className="hidden md:flex gap-10 items-center">
            {/* Saúde com Dropdown */}
            <div className="relative group">
              <button className="text-white/70 font-medium hover:text-secondary-fixed transition-colors flex items-center gap-1 py-2 cursor-pointer">
                Saúde <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-[#041847]/95 backdrop-blur-md border border-white/10 p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/saude" className="block px-4 py-2 text-sm font-bold text-secondary-fixed hover:bg-white/5 rounded-lg">Ver Geral Saúde</Link>
                <div className="h-px bg-white/10 my-1"></div>
                <Link href="/saude/psicologo" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Psicólogos</Link>
                <Link href="/saude/dentista" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Dentistas</Link>
                <Link href="/saude/nutricionista" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Nutricionistas</Link>
                <Link href="/saude/fisioterapeuta" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Fisioterapeutas</Link>
                <Link href="/saude/fonoaudiologo" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Fonoaudiólogos</Link>
              </div>
            </div>

            {/* Beleza com Dropdown */}
            <div className="relative group">
              <button className="text-white/70 font-medium hover:text-secondary-fixed transition-colors flex items-center gap-1 py-2 cursor-pointer">
                Beleza <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-[#041847]/95 backdrop-blur-md border border-white/10 p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/beleza" className="block px-4 py-2 text-sm font-bold text-secondary-fixed hover:bg-white/5 rounded-lg">Ver Geral Beleza</Link>
                <div className="h-px bg-white/10 my-1"></div>
                <Link href="/beleza/cabeleireiro" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Cabeleireiros</Link>
                <Link href="/beleza/lash-designer" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Lash Designers</Link>
                <Link href="/beleza/sobrancelhas" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Sobrancelhas</Link>
                <Link href="/beleza/nail-designer" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Nail Designers</Link>
                <Link href="/beleza/maquiador" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Maquiadores</Link>
              </div>
            </div>

            <a className="text-white/70 font-medium hover:text-secondary-fixed transition-colors" href="/#solucoes">Soluções</a>
            <a className="text-white/70 font-medium hover:text-secondary-fixed transition-colors" href="/#metodo">Método</a>
            <a className="text-white/70 font-medium hover:text-secondary-fixed transition-colors" href="/#faq">FAQ</a>
            <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20da%20WebConverte%20e%20cliquei%20em%20%22Falar%20com%20Especialista%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="bg-secondary-fixed text-azul-noite px-8 py-2.5 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center text-center">
              Falar com Especialista
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="fixed inset-0 md:hidden z-40" onClick={() => setMenuOpen(false)}>
          <div className="bg-[#041847] px-8 pt-5 pb-10 flex flex-col space-y-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="font-headline text-2xl font-light" onClick={() => setMenuOpen(false)}>
                <span className="text-secondary-fixed">WEB</span><span className="text-white">CONVERTE</span>
              </Link>
              <button className="text-white" onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Saúde */}
            <div className="flex flex-col">
              <button 
                onClick={() => setSaudeMobileOpen(!saudeMobileOpen)}
                className="text-white/70 font-medium text-lg hover:text-secondary-fixed flex items-center justify-between py-2 text-left"
              >
                <span>Saúde</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${saudeMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              {saudeMobileOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-white/10 mt-1">
                  <Link href="/saude" className="text-secondary-fixed text-base font-semibold" onClick={() => setMenuOpen(false)}>Ver Geral Saúde</Link>
                  <Link href="/saude/psicologo" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Psicólogos</Link>
                  <Link href="/saude/dentista" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Dentistas</Link>
                  <Link href="/saude/nutricionista" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Nutricionistas</Link>
                  <Link href="/saude/fisioterapeuta" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Fisioterapeutas</Link>
                  <Link href="/saude/fonoaudiologo" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Fonoaudiólogos</Link>
                </div>
              )}
            </div>

            {/* Mobile Beleza */}
            <div className="flex flex-col">
              <button 
                onClick={() => setBelezaMobileOpen(!belezaMobileOpen)}
                className="text-white/70 font-medium text-lg hover:text-secondary-fixed flex items-center justify-between py-2 text-left"
              >
                <span>Beleza</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${belezaMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              {belezaMobileOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-white/10 mt-1">
                  <Link href="/beleza" className="text-secondary-fixed text-base font-semibold" onClick={() => setMenuOpen(false)}>Ver Geral Beleza</Link>
                  <Link href="/beleza/cabeleireiro" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Cabeleireiros</Link>
                  <Link href="/beleza/lash-designer" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Lash Designers</Link>
                  <Link href="/beleza/sobrancelhas" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Sobrancelhas</Link>
                  <Link href="/beleza/nail-designer" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Nail Designers</Link>
                  <Link href="/beleza/maquiador" className="text-white/60 text-base" onClick={() => setMenuOpen(false)}>Maquiadores</Link>
                </div>
              )}
            </div>

            <a className="text-white/70 font-medium text-lg hover:text-secondary-fixed transition-colors" href="/#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a>
            <a className="text-white/70 font-medium text-lg hover:text-secondary-fixed transition-colors" href="/#metodo" onClick={() => setMenuOpen(false)}>Método</a>
            <a className="text-white/70 font-medium text-lg hover:text-secondary-fixed transition-colors" href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="https://wa.me/5583986650650?text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20da%20WebConverte%20e%20cliquei%20em%20%22setMenuOpen(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Falar%20com%20Especialista%22.%20Gostaria%20de%20falar%20com%20um%20especialista!" target="_blank" rel="noopener noreferrer" className="mt-2 bg-secondary-fixed text-azul-noite px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center text-center" onClick={() => setMenuOpen(false)}>
              Falar com Especialista
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
