# 🚀 Meu Portfólio Full Stack - SPA

Este é o repositório do meu portfólio pessoal profissional, construído com foco em alta performance, código limpo e arquitetura modular. A aplicação é uma SPA (Single Page Application) com navegação fluida por âncoras e design responsivo moderno.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** - Biblioteca para construção da interface de forma componentizada.
- **Vite** - Build tool ultra rápido para ambiente de desenvolvimento otimizado.
- **Tailwind CSS** - Framework CSS baseado em utilitários para estilização ágil e responsiva.
- **React Icons** - Biblioteca para gerenciamento leve de ícones via Tree-Shaking.

---

## 📐 Arquitetura e Código Limpo (Clean Code)

O projeto foi estruturado seguindo os princípios de modularização e separação de conceitos:
- **Separação de Dados:** Informações dinâmicas (projetos, habilidades e contatos) ficam isoladas na pasta `src/data/`, facilitando atualizações sem mexer na interface.
- **Componentes Isolados:** Menus (`Navbar`, `Sidebar`) e seções (`Hero`, `Projects`, `Contact`) possuem arquivos próprios e focados em uma única responsabilidade.
- **Scroll Suave:** Navegação nativa por ID (`#`) combinada com comportamento fluido via CSS.

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd NOME_DO_REPOSITORIO
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *Abra o endereço informado no terminal (ex: `http://localhost:5173`) no seu navegador.*

---

## 📦 Como Gerar o Build de Produção

Para compilar o código de forma otimizada para publicação:
```bash
npm run build
```
O Vite gerará os arquivos prontos para produção dentro da pasta `/dist`.

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e adaptar para o seu próprio portfólio!

---
Desenvolvido por **Seu Nome Aqui** ⚡
