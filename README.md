# 🧪 SauceDemo E-Commerce - Suíte Completa de Testes QA (Manuais & Automatizados)

Bem-vindo ao repositório de testes do e-commerce **SauceDemo**. Este projeto foi estruturado para demonstrar o ciclo de vida completo de garantia de qualidade (QA), desde o planejamento e testes manuais até a automação end-to-end com Cypress.

---

## 📌 Visão Geral do Projeto

* **Aplicação Alvo:** [SauceDemo E-Commerce](https://www.saucedemo.com/)
* **Ferramenta de Gestão Manual:** TestLink
* **Framework de Automação:** Cypress
* **Linguagem:** JavaScript

---

## 📁 Documentação de Testes Manuais

Toda a gestão, especificação e relatórios de testes manuais foram padronizados e organizados na pasta [`Docs/`](./Docs/):

1. **[Plano de Testes](./Docs/01-Plano-20de-20testes.md):** Estratégia, escopo, ambiente e ferramentas utilizadas.
2. **[Cenários de Testes](./Docs/02-cenarios-de-testes.md):** Especificação detalhada dos casos de teste (suíte de login, catálogo e checkout).
3. **[Relatório de Execução](./Docs/03-relatorio-de-testes.md):** Métricas gerais de aprovação, percentuais e status da suíte.
4. **[Relatório de Bugs](./Docs/04-relatorios-de-bugs.md):** Registro de falhas encontradas com evidências e passos de reprodução.
5. **[Massa de Dados](./Docs/05-testes-dados.md):** Mapeamento de usuários, parâmetros de checkout e dados de entrada.

> 📂 *Na pasta [`Docs/evidencias/`](./Docs/evidencias/) encontram-se as métricas exportadas, vídeos e relatórios oficiais em PDF e XML do TestLink.*

---

## 🚀 Testes Automatizados com Cypress

Este repositório contém a automação dos fluxos principais da aplicação (E2E) cobrindo autenticação, navegação e fluxo de compras.

### 🛠️ Pré-requisitos
Antes de executar os testes automatizados, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 16 ou superior)
* [Git](https://git-scm.com/)

### 🔧 Passo a Passo para Execução

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Yezzirz/Saucedemo-QA-Suite.git](https://github.com/Yezzirz/Saucedemo-QA-Suite.git)
   cd Saucedemo-QA-Suite
   ```


### Instalar as dependências do projeto:

npm install

Executar o Cypress em modo Interativo (Interface Gráfica):

npx cypress open
Executar o Cypress em modo Headless (Linha de Comando/Terminal):

npx cypress run


### 📊 Cobertura de Testes Automatizados
[x] Autenticação: Login com credenciais válidas, senha inválida e usuário bloqueado.

[x] Catálogo: Adição e remoção de produtos do carrinho.

[x] Checkout: Validação do formulário de comprador e fluxo de finalização de pedido.

👨‍💻 Autor
Desenvolvido por Otavio Alves