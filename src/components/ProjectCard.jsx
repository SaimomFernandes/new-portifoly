import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, tags, githubUrl, deployUrl }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-slate-800/40 p-6 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5">
      <div>
        {/* Links do Projeto (Top Direita) */}
        <div className="flex justify-end gap-4 text-slate-400 mb-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" title="Código Fonte">
              <FaGithub size={18} />
            </a>
          )}
          {deployUrl && (
            <a href={deployUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" title="Projeto Online">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>

        {/* Título e Descrição */}
        <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
          {title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}