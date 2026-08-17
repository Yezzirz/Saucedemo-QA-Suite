# 🧪 SauceDemo E-Commerce - Suíte Completa de Testes QA (Manuais, Automatizados & CI/CD)

Bem-vindo ao repositório de testes do e-commerce SauceDemo. Este projeto foi estruturado para demonstrar o ciclo de vida completo de garantia de qualidade (QA), desde o planejamento e testes manuais até a automação End-to-End (E2E) com Cypress e Integração Contínua (CI/CD).

---

## 📌 Visão Geral do Projeto

* **Aplicação Alvo:** [SauceDemo E-Commerce](https://www.saucedemo.com/)
* **Gestão & Testes Manuais:** TestLink
* **Framework de Automação:** Cypress
* **Linguagem:** JavaScript
* **Integração Contínua (CI/CD):** GitHub Actions

---

## 📁 Documentação de Testes Manuais

Toda a gestão, especificação e relatórios de testes manuais foram padronizados e organizados na pasta `Docs/`:

* **Plano de Testes:** Estratégia, escopo, ambiente e ferramentas utilizadas.
* **Cenários de Testes:** Especificação detalhada dos casos de teste (login, catálogo e checkout).
* **Relatório de Execução:** Métricas gerais de aprovação, percentuais e status da suíte.
* **Relatório de Bugs:** Registro de falhas encontradas com evidências e passos de reprodução.
* **Massa de Dados:** Mapeamento de usuários, parâmetros de checkout e dados de entrada.

> 📂 Na pasta `Docs/evidencias/` encontram-se as métricas exportadas, vídeos e relatórios oficiais em PDF e XML do TestLink.

---

## ⚙️ Esteira de CI/CD (GitHub Actions)

O projeto conta com uma pipeline automatizada de Integração Contínua configurada via **GitHub Actions** (`.github/workflows/workflow_sauce.yml`).

* **Gatilhos (Triggers):** A esteira é disparada automaticamente a cada `git push` ou `Pull Request` na branch principal (`main`).
* **Execução:** Os testes Cypress são executados em modo *headless* no ambiente Linux da nuvem.
* **Objetivo:** Garantir que nenhuma alteração no código quebre os fluxos críticos da aplicação, oferecendo feedback contínuo sobre a saúde do projeto.

---

## 🚀 Testes Automatizados com Cypress

Este repositório contém a automação dos fluxos principais da aplicação (E2E) cobrindo autenticação, navegação e fluxo de compras.

### 🧪 Cobertura da Suíte E2E:
- [x] **Autenticação:** Login com credenciais válidas, senha inválida e usuário bloqueado.
- [x] **Catálogo:** Adição e remoção de produtos do carrinho.
- [x] **Checkout:** Validação do formulário do comprador e fluxo de finalização de pedido.

---

## 🛠️ Pré-requisitos & Execução Local

Antes de executar os testes automatizados, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 16 ou superior)
* [Git](https://git-scm.com/)

.

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Yezzirz/Saucedemo-QA-Suite.git
cd Saucedemo-QA-Suite
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o Cypress em modo Headless (Terminal)

```bash
npx cypress run
```

### 4. Executar o Cypress em modo Interativo (Interface Gráfica)

```bash
npx cypress open
```

## 🛠️ Tecnologias e ferramentas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub
- VS Code

## 👨‍💻 Autor

**Otavio Alves**

Desenvolvido para estudos e prática de **QA e Automação de Testes**.
