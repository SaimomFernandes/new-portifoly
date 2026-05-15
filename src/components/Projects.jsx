
import ProjectCard from './ProjectCard';
import projectsData from './data/projects';

export default function Projects() {
  return (
    <section id="projetos" className="min-h-0 mb-96 mt-44 pt-24">
      <h3 className="text-3xl font-bold tracking-tight">Projetos em Destaque</h3>
      <div className="h-[1px] w-12 bg-emerald-500 mt-2 mb-10"></div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            deployUrl={project.deployUrl}
          />
        ))}
      </div>
    </section>
  );
}
