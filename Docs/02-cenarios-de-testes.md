# 📋 Cenários de Testes - SauceDemo E-Commerce

## 🔐 Módulo: Autenticação e Login

### 🔹Sauce-1: Login com credenciais válidas

* **Pré-condição:**  Estar na página de login.
* **Passos:**
  1. Preencher o campo de usuário com `standard_user`.
  2. Preencher o campo de senha com `secret_sauce`.
  3. Clicar no botão "Login".
* **Resultado Esperado:** 


### 🔹Sauce-2 : Login com credenciais inválidas.

* **Pré-condição:** Estar na página de login.
* **Passos:**
  1. preencher login com credenciais inválidas
  2. preencher password com credenciais inválidas
  3. clicar no botão de efetuar login
* **Resultado Esperado:** Exibir mensagem de erro: "Epic sadface: Username and password do not match any user in this service".

### 🔹Sauce-3 : Validação de campos obrigatórios

* **Pré-condição:** Estar na página de login.
* **Passos:**
  1. manter login vazio
  2. manter password vazio
  3. clicar no botão de login
* **Resultado Esperado:** Exibir a mensagem de erro "Epic sadface: Username is required" no banner inferior.

### 🔹Sauce-4 : Bloquear tentativa de login

* **Pré-condição:** Estar na página de login.
* **Passos:**
  1. Preencher o campo de usuário com locked_out_user.
  2. Preencher o campo de senha com secret_sauce.
  3. clicar no botão de login
* **Resultado Esperado:** Exibir a mensagem de erro: "Epic sadface: Sorry, this user has been locked out.".


---

## 🛍️ Módulo: Catálogo de Produtos


### 🔹Sauce-5 : Visualização da lista de produtos e detalhes do item.

* **Pré-condição:** Estar autenticado e na página do catálogo de produtos (/inventory.html).
* **Passos:**
  1. Verificar a exibição da lista de produtos na vitrine.
 * **Resultado Esperado:** A página deve exibir a lista de produtos com imagem, título, descrição e preço.
  2. 
  3. Clicar no título de um produto (ex: Sauce Labs Backpack).
* **Resultado Esperado:** O usuário deve ser redirecionado para a página de detalhes do produto (/inventory-item.html?id=4) mostrando as informações completas e o botão "Add to cart".

### 🔹Sauce-6 : Ordenação por nome (A-Z / Z-A) e preço (menor-maior / maior-menor).

* **Pré-condição:** Estar autenticado e na página do catálogo de produtos (/inventory.html).
* **Passos:**
  1. Clicar no menu suspenso de ordenação no canto superior direito (Name (A to Z)).
  2. Selecionar a opção Name (Z to A).
  3. Selecionar a opção Price (low to high).
  4. Selecionar a opção Price (high to low).
* **Resultado Esperado:** O catálogo deve reordenar os itens instantaneamente de acordo com a opção selecionada em cada passo.

### 🔹Sauce-7 : Adição e remoção de produtos direto da vitrine.

* **Pré-condição:** Estar autenticado e na página do catálogo de produtos (/inventory.html).
* **Passos:**
  1. Clicar no botão "Add to cart" do produto Sauce Labs Backpack.
  * **Resultado Esperado:** O botão deve mudar para "Remove"
  2. Verificar o ícone do carrinho no topo da página.
  * **Resultado Esperado:** O ícone do carrinho deve exibir o badge numerado 1
  3. Clicar no botão "Remove" do mesmo produto na vitrine.
* **Resultado Esperado:** O botão deve voltar a ser "Add to cart" e o badge numérico do carrinho deve sumir.


---

## 🛒 Módulo: Carrinho e Checkout


### 🔹Sauce-8 : Persistência dos itens selecionados no carrinho.

* **Pré-condição:** Estar autenticado e com pelo menos 1 item adicionado ao carrinho.
* **Passos:**
  1. Clicar no ícone do carrinho para acessar a página do carrinho (/cart.html).
  2. Clicar no botão "Continue Shopping" para voltar ao catálogo.
  3. Navegar para a página de detalhes de qualquer produto.
  4. Retornar à página do carrinho (/cart.html).
* **Resultado Esperado:** O item adicionado previamente deve continuar presente na lista do carrinho durante e após toda a navegação.

### 🔹Estar na página de informações do checkout (/checkout-step-one.html).

* **Pré-condição:** Estar na página de informações do checkout (/checkout-step-one.html).
* **Passos:**
  1. Deixar todos os campos em branco e clicar no botão "Continue".
  * **Resultado Esperado:** Exibir mensagem de erro "Error: First Name is required".
  2. Preencher o campo "First Name", deixar os outros vazios e clicar em "Continue".
  * **Resultado Esperado:** Exibir mensagem de erro "Error: Last Name is required".
  3. Preencher "First Name" e "Last Name", deixar "Zip/Postal Code" vazio e clicar em "Continue".
* **Resultado Esperado:** Exibir mensagem de erro "Error: Postal Code is required".

### 🔹Sauce-10 : Cálculo do valor total e resumo do pedido.

* **Pré-condição:** Ter preenchido os dados do comprador e estar na página de resumo do checkout (/checkout-step-two.html).
* **Passos:**
  1. Verificar a lista de itens exibidos no resumo.
  2. Conferir o valor do subtotal (Item total).
  3. Conferir o valor do imposto (Tax).
  4. Conferir o valor final (Total).
* **Resultado Esperado:** O Item total deve ser a soma exata dos preços dos produtos. O Total final deve corresponder rigorosamente à soma de Item total + Tax.

### 🔹Sauce-11 : Tela de confirmação final (`THANK YOU FOR YOUR ORDER`).

* **Pré-condição:** Estar na página de resumo do checkout (/checkout-step-two.html).
* **Passos:**
  1. Clicar no botão "Finish".
  2. 
* **Resultado Esperado:** O usuário deve ser redirecionado para a página final (/checkout-complete.html), exibindo o cabeçalho "Thank you for your order!" e a mensagem de confirmação de envio do pedido.

### 🔹Sauce-12 : Impedir finalização de compra com carrinho vazio

* **Pré-condição:** Acessar o site e estar na página do carrinho (/cart.html) sem nenhum item adicionado.
* **Passos:**
  1. Clicar no botão "Checkout".
* **Resultado Esperado:** O sistema deve exibir mensagem de alerta ("O carrinho está vazio") ou manter o botão "Checkout" desabilitado.