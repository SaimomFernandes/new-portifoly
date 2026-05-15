
import contactData  from './data/contact';

export default function Contact() {
  return (
    <section id="contato" className="py-5 mb-40" >
      <h3 className="text-3xl font-bold tracking-tight">Contato</h3>
      <div className="h-[1px] w-12 bg-emerald-500 mt-2 mb-10"></div>

      <div className="grid gap-6 sm:grid-cols-3">
        {contactData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col justify-between p-6 rounded-xl bg-slate-800/20 border border-slate-800/60 transition-all duration-300 hover:border-emerald-500/20 hover:bg-slate-800/40"
            >
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="text-sm font-mono text-emerald-400">{item.type}</h4>
                <p className="text-slate-200 font-medium mt-1 break-all">{item.value}</p>
              </div>

              {item.href && (
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-6 text-center text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 py-2 rounded-lg transition-all duration-200"
                >
                  {item.buttonText}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
