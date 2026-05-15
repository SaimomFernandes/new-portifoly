
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  
  return (

     <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex">
      {/* Menu Fixo na lateral esquerda */}
      <Sidebar />

      {/* Área de conteúdo empurrada para a direita (pl-16) para não cobrir a sidebar */}
      <div className="flex flex-1 flex-col pl-16">
        <Navbar />
        
        <main className="mx-auto w-full max-w-5xl px-8 py-12">
          <Hero />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
    
  )
}

export default App
