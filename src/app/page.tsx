import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      
      {/* --- HERO SECTION --- */}
      {/* Ajuste: min-h-screen para garantir que ocupe a tela toda mesmo no celular */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 md:px-6 text-center relative overflow-hidden pt-20 md:pt-0">
        
        {/* Efeito de luz de fundo (Glow) - Ajustado para não vazar a tela */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

        <span className="text-secondary font-medium tracking-widest mb-4 uppercase text-xs md:text-sm border border-secondary/30 px-3 py-1 rounded-full bg-secondary/5">
          Desenvolvedor Fullstack em Formação
        </span>

        {/* Título Responsivo: text-4xl no celular, text-7xl no PC */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Olá, sou <span className="text-primary text-glow">Leonardo</span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-8 md:mb-10 leading-relaxed">
          Transformo necessidades reais em software eficiente. <br className="hidden md:block" />
          <span className="text-white font-medium">Conheça mais sobre minhas competências</span> e veja como posso contribuir com seu time:
        </p>

        {/* Botões - Wrap para cair para linha de baixo se a tela for muito estreita */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-12 md:mb-16 w-full md:w-auto">
          
          <a 
            href="https://www.linkedin.com/in/leonardo-lins-343265317/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#005582] text-white rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(0,119,181,0.3)] hover:shadow-[0_0_25px_rgba(0,119,181,0.5)] w-full md:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>

          <a 
            href="/curriculoLeonardo.pdf" 
            download
            className="group flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition-all hover:bg-white/5 w-full md:w-auto"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Baixar CV
          </a>

        </div>

        <a 
          href="#projetos" 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors animate-bounce cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Ver Projetos</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>

      </section>

      {/* --- SOBRE MIM (TIMELINE) --- */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></span>
          Minha Jornada
        </h2>

        {/* Grid: 1 coluna no mobile, 2 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Formação */}
          <div className="bg-surface/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Formação Acadêmica</h3>
            <p className="text-primary font-medium mb-1">Cesar School</p>
            <p className="text-sm text-gray-400 mb-4">Análise e Desenvolvimento de Sistemas</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Foco em engenharia de software, algoritmos e resolução de problemas complexos.
              Base sólida em lógica de programação e arquitetura de projetos.
            </p>
          </div>

          {/* Card 2: Experiência */}
          <div className="bg-surface/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Experiência Profissional</h3>
            <p className="text-secondary font-medium mb-1">Lotran Logística e Transporte</p>
            <p className="text-sm text-gray-400 mb-4">Apoio Técnico / Jovem Aprendiz</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Apoio em processos logísticos, faturamento, cobrança e logística reversa. Execução de rotinas
              administrativas e controle de documentos.
            </p>
          </div>

        </div>
      </section>

      {/* --- PROJETOS SECTION --- */}
      <section id="projetos" className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-primary rounded-full"></span>
          Projetos Selecionados
        </h2>

        {/* Grid Responsivo: 1 col (celular), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-surface border border-white/5 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="text-gray-500 group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path></svg>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-black/30 text-gray-300 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <p className="text-xs text-gray-500 mb-2 italic">Destaque:</p>
                <p className="text-sm text-gray-300 font-medium">
                  {project.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER SIMPLES --- */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-10 px-4">
        <p>Desenvolvido com Next.js & Tailwind por Leonardo.</p>
      </footer>

    </main>
  );
}