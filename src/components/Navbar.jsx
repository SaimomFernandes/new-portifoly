import { BiFileBlank } from "react-icons/bi";

export default function Navbar() {
  return (

                    // sticky top-0 z-40 flex                                       h-20 items-center justify-between bg-slate-900/80 px-8 backdrop-blur-md 
    <header className=" top-0 z-40 flex flex-col sm:flex-row sm:mb-0 sm:justify-between sm:mt-2 gap-4 mb-16 mt-32 h-20 items-center justify-center bg-slate-900/80 px-8 backdrop-blur-md  ">
        <div className="flex flex-col items-center gap-1 pt-20 mt-4">
            {/* Foto maior (Aumentou de 36px para 56px) */}
            <div className="w-20 h-20 sm:w-38 sm:h-38   rounded-full overflow-hidden border border-emerald-500/40 bg-slate-800  shadow-lg shadow-emerald-500/5">
              <img src="/minhafotodecapa.jpg" alt="Maurício" className="w-full h-full object-cover" />
            </div>
            {/* Logo centralizado logo abaixo da foto com fonte um pouco menor para equilibrar */}
            <div className="text-xs font-bold pt-2 tracking-widest text-emerald-400 font-mono">
              &lt;FS /&gt;
           </div>
        </div>
        {/* flex flex-col sm:flex-row items-center gap-8 text-sm font-medium tracking-wide */}
        <nav className="flex flex-col sm:flex-row  sm:items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#inicio" className="text-slate-200 transition-colors hover:text-emerald-400">Início</a>
            <a href="#projetos" className="text-slate-400 transition-colors hover:text-emerald-400">Projetos</a>
            <a href="#contato" className="text-slate-400 transition-colors hover:text-emerald-400">Contato</a>
             <a 
              href="/curriculo.pdf" 
              download="Curriculo_Desenvolvedor_FullStack.pdf"
              className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 transition-all hover:bg-emerald-500 hover:text-slate-950"
            >
              <BiFileBlank size={14} /> CV
        </a>
        </nav>
    </header>
  );
}