const projectsData = [

  {
    title: "Portfólio Pessoal SPA",
    description: "Website moderno construído com arquitetura baseada em componentes, Clean Code e separação de dados. Possui design responsivo, modo escuro nativo e navegação fluida por âncoras.",
    tags: ["React", "Vite", "Tailwind CSS", "React Icons"],
    githubUrl: "https://github.com/SaimomFernandes/new-portifoly", // Link do repositório quando criar
    deployUrl: "https://vercel.app" // Link gerado no deploy
  },
   {
    title: "Controle de Estoque Fullstack",
    description: "Sistema completo de gerenciamento de inventário com mapeamento de categorias e produtos. Demonstra o uso prático de rotas REST estruturadas, identificadores UUID, persistência relacional estável e documentação interativa de endpoints.",
    tags: ["Java 17", "Spring Boot 3", "MySQL", "Docker", "Swagger"],
    githubUrl: "https://github.com/SaimomFernandes/controle-estoque", // Cole o link do seu projeto aqui
    deployUrl: "" // Fica vazio já que roda local com Docker
  },
  {
    title: "Gestão de Vagas - Condomínio",
    description: "API RESTful para controle de veículos em estacionamentos. Desenvolvido com foco no fluxo assíncrono de dados via JSON, consumo de endpoints com Fetch API e segurança na persistência de dados utilizando Prepared Statements.",
    tags: ["PHP 8", "MySQL", "JavaScript ES6", "Fetch API", "Layui"],
    githubUrl: "https://github.com/SaimomFernandes/contreoller-de-vagas-projeto-da-facudade", // Substitua pelo seu link real do Git
    deployUrl: "" // Fica em branco pois roda em servidor local (XAMPP)
  },
  {
    title: "Gestão de Vagas (Front-end React)",
    description: "Interface dinâmica para controle de estacionamento integrada a uma API Spring Boot. O projeto demonstra o consumo assíncrono de rotas CRUD, gerenciamento de estado no React e tabelas responsivas otimizadas.",
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"],
    githubUrl: "https://github.com/SaimomFernandes/consumindo-api-safe-parking", // Seu link do Git
    deployUrl: "" // Fica em branco pois depende da API Spring rodando local
  },
];
export default projectsData;