# 📋 Plano de Testes - SauceDemo E-Commerce

---

## 1. Módulo: Autenticação (Login)

### 1.1. Objetivo
Validar se o usuário consegue acessar o sistema corretamente com credenciais válidas e se as restrições de acesso/mensagens de erro funcionam conforme esperado.

### 1.2. Escopo do Módulo
* Login com credenciais válidas .
* Login com credencias inválidas .
* Validação de campos obrigatórios.
* Exibição de mensagens de erro para credenciais inválidas.
* Bloquear tentativa de login após 5 tentativas.

---

## 2. Módulo: Catálogo de Produtos

### 2.1. Objetivo
Garantir que a listagem de produtos seja exibida corretamente e que as opções de ordenação e navegação funcionem sem falhas.

### 2.2. Escopo do Módulo
* Visualização da lista de produtos e detalhes do item.
* Ordenação por Nome (A-Z / Z-A) e Preço (menor-maior / maior-menor).
* Adição e remoção de produtos direto da vitrine.

---

## 3. Módulo: Carrinho e Checkout

### 3.1. Objetivo
Validar o fluxo completo de compra, desde a adição de itens ao carrinho até a confirmação e finalização do pedido.

### 3.2. Escopo do Módulo
* Persistência dos itens selecionados no carrinho.
* Validação dos campos obrigatórios do comprador (Nome, Sobrenome, CEP).
* Cálculo do valor total e resumo do pedido.
* Tela de confirmação final (`THANK YOU FOR YOUR ORDER`).