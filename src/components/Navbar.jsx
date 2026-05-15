import { BiFileBlank } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between bg-slate-900/80 px-8 backdrop-blur-md">
        <div className="text-lg font-bold tracking-wider text-emerald-400">
            &lt;FS /&gt;
        </div>
        
        <nav className="flex items-center gap-8 text-sm font-medium tracking-wide">
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