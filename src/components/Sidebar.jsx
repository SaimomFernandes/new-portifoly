

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-0 z-50 flex w-16 flex-col items-center justify-center gap-6 bg-transparent px-2">
                <a href="https://github.com/SaimomFernandes" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-emerald-400">
                    <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/mauricio-fernandes-8393071a6/" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-emerald-400">
                    <FaLinkedin size={22} />
                </a>
                <a href="mailto:seu-email@email.com" className="text-slate-400 transition-colors hover:text-emerald-400">
                    <FaEnvelope size={22} />
                </a>
            <div className="h-12 w-[1px] bg-slate-700"></div>
    </aside>
  );
}
