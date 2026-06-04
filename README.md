
# 🔍 GitHub Perfil Finder

> 🧩 **O que este projeto comprova:** React, Vite, consumo de API pública (GitHub API), tratamento de erros e estados de loading, e CSS Modules.

Um projeto em **React** que permite pesquisar usuários do GitHub e visualizar seus perfis e repositórios de forma simples e intuitiva.

## 🚀 Funcionalidades
- Pesquisa de usuários do GitHub através de uma barra de busca estilizada.
- Exibição do perfil do usuário (foto, nome, bio).
- Listagem dos repositórios públicos com nome, linguagem e link direto para o GitHub.
- Mensagens de erro amigáveis quando o usuário não é encontrado ou há problemas na API.
- Simulação de carregamento com feedback visual.

## 🛠️ Tecnologias utilizadas
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules para estilização isolada
- API pública do [GitHub](https://docs.github.com/en/rest)

## 📸 Demonstração
![SearchBar](./public/demo.png)

## 📦 Como rodar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/github-perfil-finder.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto:
   ```bash
   npm run dev
  

## 📂 Estrutura de pastas
```
src/
 ├── components/
 │   ├── Perfil/
 │   ├── ReposList/
 │   └── SearchBar/
 ├── App.jsx
 ├── global.css
```

## ✨ Melhorias futuras
- Adicionar paginação na lista de repositórios.
- Exibir estatísticas do usuário (seguidores, seguindo, estrelas).
- Dark mode para a interface.

---
