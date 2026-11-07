# Atividade Prática: Bootstrap 5 & Desafio Extra Tailwind CSS

Repositório da atividade avaliativa da disciplina **Tópicos Avançados de Frameworks** do curso de **Engenharia de Software** da **Universidade Católica do Salvador (UCSAL)** — Semestre 2026.2.

**Docente:** Prof. Elton Figueiredo da Silva  
**Tema da Solução:** DevTech Academy (Portal de Cursos e Imersões Tecnológicas)

---

## 📋 Sobre o Projeto

O objetivo principal desta atividade é desenvolver uma interface web moderna, semântica e totalmente responsiva, aplicando os recursos do framework **Bootstrap 5.3** e, no desafio extra de bonificação (+0,2 pontos), recriando os mesmos recursos através do paradigma *utility-first* com **Tailwind CSS**.

### 🌟 Componentes Obrigatórios Implementados

1. **Navbar Responsiva:** Brand *DevTech.Academy*, links de navegação rápida, CTA de inscrição e menu hambúrguer colapsável (`navbar-expand-lg`, `navbar-toggler`) para dispositivos móveis.
2. **Carrossel Hero:** 3 slides temáticos (Full Stack, DevOps Cloud e Inteligência Artificial) com legendas (`carousel-caption`), controles anterior/próximo e indicadores (*dots*).
3. **Cards em Grid:** Grid responsivo (`col-12 col-md-6 col-lg-4`) contendo formações com badges dinâmicos, descrição e botões de ação.
4. **Tabela de Dados:** Grade de turmas com invólucro responsivo (`table-responsive`), cabeçalho escuro e alternância de linhas (`table-striped table-hover`) contendo mais de 5 registros.
5. **Formulário de Inscrição:** Formulário com validação HTML5 nativa (`needs-validation`), feedback visual e 6 campos associados via labels.
6. **Modal Interativo:** Caixa de diálogo para termos de matrícula com backdrop semi-transparente, rolagem interna e botões de concordância/fechamento.

### ⚡ Desafio Extra: Tailwind CSS (+0,2 pontos)
Uma versão independente e autônoma foi desenvolvida na pasta [`tailwind/`](./tailwind/index.html), recriando integralmente todos os 6 componentes utilizando exclusivamente classes utilitárias atômicas do Tailwind CSS (`grid`, `flex`, `md:`, `lg:`, `bg-slate-950`, etc.) sem regras CSS genéricas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** `<header>`, `<main>`, `<section>`, `<footer>`, tags semânticas e atributos WAI-ARIA.
- **Bootstrap 5.3 & Bootstrap Icons:** Integração via CDN oficial.
- **Tailwind CSS:** Integração via CDN Play Utility-First e FontAwesome 6.
- **Vite:** Servidor de desenvolvimento rápido e bundler multi-página.

---

## 🚀 Como Executar o Projeto

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

*(Ambas as páginas contam com botões na barra de navegação superior para alternar entre as versões com um clique).*

### Build de Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 🎥 Roteiro do Vídeo de Apresentação (5 Minutos)

O vídeo demonstrativo atende aos critérios do enunciado:
- **00:00 - 00:30:** Identificação do aluno, apresentação do tema DevTech Academy e estrutura semântica HTML5.
- **00:30 - 02:00:** Demonstração da Navbar colapsável (modo mobile no DevTools), Carrossel interativo e Grid de Cards responsivos.
- **02:00 - 03:30:** Demonstração da Tabela com scroll horizontal, validação do Formulário e abertura/fechamento do Modal.
- **03:30 - 04:35:** Apresentação da solução independente em Tailwind CSS (`/tailwind/`) e comparação entre os dois paradigmas.
- **04:35 - 05:00:** Conclusão, considerações sobre produtividade x flexibilidade e encerramento.
