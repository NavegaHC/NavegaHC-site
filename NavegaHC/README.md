# NavegaHC-site

Endereço Organização GITHUB: https://github.com/NavegaHC

## Objetivo do Projeto
Este projeto, intitulado Navega HC, tem como objetivo o desenvolvimento de uma 
aplicação voltada ao suporte informativo e organizacional dos pacientes do Instituto 
de Medicina Física e Reabilitação do Hospital das Clínicas da Faculdade de 
Medicina da USP (IMREA). A solução foi idealizada para oferecer orientações 
básicas sobre como participar de consultas de fisioterapia online, com foco na 
inclusão digital de usuários com pouco domínio tecnológico, como idosos e pessoas 
com deficiência. 

## Estrutura de pastas e arquivos

    projeto
        public/
            src/
                components/
                    Botao_acessibilidade/
                        arquivo tsx
                    Botao_chat/
                        arquivo tsx
                    Cabecalho/
                        arquivo tsx
                    Footer/
                        arquivo tsx
                pages/
                    Checklist/
                        arquivo tsx
                    Contato/
                        arquivo tsx
                    Faq/
                        arquivo tsx
                    Formulario/
                        arquivo tsx
                    Home/
                        arquivo tsx
                    Integrantes/
                        arquivo tsx
                    Lembrete/
                        arquivo tsx
                App.tsx 
                index.css
                main.tsx
            vite-env.d.ts
            eslint.config.js
            index.html
            package.json
            package-lock.json
            .gitignore



## Tecnologia Utilizada

    Front-End

    Vite: Bundler rápido para desenvolvimento front-end.
    React: Biblioteca para construção da interface.
    TypeScript: Superset do JavaScript com tipagem estática.
    TailwindCSS: Framework de estilização utilitária.

    Back-End e Integrações

    - Java + Quarkus: API RESTful que fornece os dados e gerencia as operações do sistema.
    - Banco de Dados: Integração com o banco de dados relacional.
    - Hospedagem Remota: A API Java foi hospedada remotamente na plataforma Render, que oferece deploy e gerenciamento fácil de serviços web.
    - Fetch API: Utilizado no front-end para comunicação com a API Java.
    - API RESTful: Define endpoints para operações como criação, leitura, atualização e exclusão das informações do formulário. 

## Integrantes

    Nome:
        Samantha Faruolo Galdi/RM554794
        GITHUB: https://github.com/samyfg41
        Ana Claudia Fernandes Martins/RM561190
        GITHUB: https://github.com/AnaCFmartins
        Agatha Yie Won Yun/RM561507
        GITHUB: https://github.com/agathayun

## Imagens e Ícones

    public
        img
            acessibilidade.png (ícone de acessiblidade)
            chatbotnhc.png (ícone do chatbot)
            facebook.png (ícone do facebook)
            icon_aywy.png (imagem de perfil da Agatha)
            icon_smf.png (imagem de perfil da Samantha)
            instagram.png (ícone do instagram)
            linkedin.png (ícone do linkedin)
            logonhc.png (logo do site NavegaHC)
            menina_home.png (imagem da menina na página home)
            menina_lembrete.png (imagem da menina na página lembrete)
            

## Endereço repositório do projeto do GITHUB

Endereço GITHUB: https://github.com/NavegaHC/NavegaHC-site.git

## Link do Vídeo no Youtube

Link: https://youtu.be/NXjoIN0eVTY?si=pexr7JNWcspRl6hU

## Formatação arquivo MARKDOWN (*.MD)
https://support.zendesk.com/hc/pt-br/articles/4408846544922-Formata%C3%A7%C3%A3o-de-texto-com-Markdown?page=1&sort_by=created_at&sort_order=desc     

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
