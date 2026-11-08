# Atividade Prática: Bootstrap 5 & Desafio Extra Tailwind CSS

Repositório da atividade avaliativa da disciplina **Tópicos Avançados de Frameworks** do curso de **Engenharia de Software** da **Universidade Católica do Salvador (UCSAL)** — Semestre 2026.2.

**Docente:** Prof. Elton Figueiredo da Silva  
**Tema da Solução:** DevTech Academy (Portal de Cursos de Extensão em Tecnologia)

---

## Sobre o Projeto

O objetivo desta atividade é desenvolver uma página web responsiva aplicando os recursos do framework **Bootstrap 5.3** e, no desafio extra, recriando a mesma interface com **Tailwind CSS**.

### Componentes Implementados

1. **Navbar Responsiva:** Logotipo, links de navegação, botão de ação e menu colapsável (`navbar-expand-lg`, `navbar-toggler`) para dispositivos móveis.
2. **Carrossel Hero:** 3 slides com fotos de atividades acadêmicas, legendas explicativas, controles anterior/próximo e indicadores (*dots*).
3. **Cards em Grid:** Grid responsivo de 12 colunas (`col-12 col-md-6 col-lg-4`) apresentando os cursos com carga horária, resumo e botões de inscrição.
4. **Tabela de Dados:** Grade de turmas com invólucro responsivo (`table-responsive`), cabeçalho claro e linhas zebradas (`table-striped table-hover`) com 6 registros reais.
5. **Formulário de Inscrição:** Formulário com validação HTML5 nativa (`needs-validation`), mensagens de retorno e campos devidamente associados via labels.
6. **Modal Interativo:** Janela com o regulamento das atividades de extensão, com rolagem interna, fundo escurecido e botões de fechamento.

### Desafio Extra: Tailwind CSS
Uma versão independente foi desenvolvida na pasta [`tailwind/`](./tailwind/index.html), recriando integralmente todos os 6 componentes utilizando classes utilitárias do Tailwind CSS (`grid`, `flex`, `md:`, `lg:`, `bg-white`, `border-slate-200`) e JavaScript nativo para as interações.

---

## Tecnologias Utilizadas

- **HTML5 Semântico:** `<header>`, `<main>`, `<section>`, `<footer>`, tags semânticas e atributos WAI-ARIA.
- **Bootstrap 5.3 & Bootstrap Icons:** Integração via CDN oficial.
- **Tailwind CSS:** Integração via CDN oficial e FontAwesome 6.
- **Vite:** Servidor de desenvolvimento rápido e bundler multi-página.

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+) e npm instalados, ou ambiente **GitHub Codespaces**.

### Instalação e Execução

```bash
# 1. Instalar as dependências do Vite
npm install

# 2. Executar o servidor de desenvolvimento
npm run dev
```

Acesse no seu navegador:
- **Solução Principal (Bootstrap 5):** `http://localhost:5174/`
- **Desafio Extra (Tailwind CSS):** `http://localhost:5174/tailwind/`

*(As duas páginas possuem botões na barra de navegação para alternar entre as versões com facilidade).*

### Build de Produção
```bash
npm run build
```
Os arquivos otimizados são gerados na pasta `dist/`.
