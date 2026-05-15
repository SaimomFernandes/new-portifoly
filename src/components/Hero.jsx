export default function Hero() {
  return (
    <section id="inicio" className="flex min-h-[70vh] flex-col justify-center">
            <span className="text-sm font-mono text-emerald-400">Olá, meu nome é</span>

            <h1 className="mt-2 text-5xl font-extrabold tracking-tight md:text-7xl">
                Mauricio Fernandes.
            </h1>

            <h2 className="mt-3 text-4xl font-bold text-slate-400 md:text-6xl">
                Desenvolvedor Full Stack.
            </h2>
            
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                Construo aplicações web robustas, escaláveis e focadas na experiência do usuário. Pronto para transformar ideias em código limpo.
            </p>
            
            <div className="mt-10">
                <a href="#projetos" className="rounded bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-400 active:translate-y-0 inline-block">
                Veja meus projetos
                </a>
            </div>
    </section>
  );
}