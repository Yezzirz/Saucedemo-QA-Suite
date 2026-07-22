# 💾 Massa de Dados de Testes (Test Data) - SauceDemo

**Projeto:** SauceDemo E-Commerce  
**Objetivo:** Centralizar todas as credenciais, parâmetros e dados de entrada utilizados na execução da suíte de testes.

---

## 👥 1. Usuários e Autenticação

### ⚡ Usuários Utilizados nos Testes Realizados

| Tipo de Usuário | Username | Password | Cenário Testado |
| :--- | :--- | :--- | :--- |
| **Padrão (Caminho Feliz)** | `standard_user` | `secret_sauce` | Testes do fluxo principal de Login, Catálogo e Checkout. |
| **Bloqueado (Negativo)** | `locked_out_user` | `secret_sauce` | Validação da mensagem de erro ao tentar autenticar. |

---

### ℹ️ Outros Usuários Disponíveis no SauceDemo (Não Utilizados nesta Suíte)

| Tipo de Usuário | Username | Password | Finalidade do Perfil no Sistema |
| :--- | :--- | :--- | :--- |
| **Problema Visual** | `problem_user` | `secret_sauce` | Simulação de imagens quebradas e falhas na interface. |
| **Lag / Performance** | `performance_glitch_user` | `secret_sauce` | Simulação de lentidão e tempo de resposta alto. |
| **Erro de Requisição** | `error_user` | `secret_sauce` | Simulação de falhas nas chamadas do sistema. |
| **Visual Incorreto** | `visual_user` | `secret_sauce` | Simulação de desalinhamento de elementos na UI. |

---

## 💳 2. Dados para Checkout e Formulários

Dados simulados utilizados nos testes do fluxo de finalização de compra:

### 👤 Informações do Comprador (Checkout: Your Information)
* **Primeiro Nome (First Name):** `yezzir`
* **Sobrenome (Last Name):** `1`
* **Código Postal (Zip/Postal Code):** `44380-000`
> 💡 **Nota do QA:** O sistema aceita números no campo *Last Name* (ex: `1`). Em um sistema de produção real, isso poderia ser uma oportunidade de melhoria para limitar o campo apenas a caracteres alfabéticos.

### 🛒 Cenário de Teste Limite (Massa Nula)
* **Primeiro Nome:** ` ` *(Vazio)*
* **Sobrenome:** ` ` *(Vazio)*
* **CEP:** ` ` *(Vazio)*
* **Objetivo:** Validar as mensagens de erro de campos obrigatórios (`Error: First Name is required`).

---

## 📦 3. Produtos Utilizados nos Testes

| ID / Item | Nome do Produto | Preço | Usado no Cenário |
| :---: | :--- | :---: | :--- |
| **Item 01** | Sauce Labs Backpack | `$29.99` | Testes de adição/remoção do carrinho |
| **Item 02** | Sauce Labs Bike Light | `$9.99` | Testes de múltiplos itens no checkout |
| **Item 03** | Sauce Labs Onesie | `$7.99` | Validação de filtro (menor preço) |
| **Item 04** | Sauce Labs Fleece Jacket | `$49.99` | Validação de filtro (maior preço) |