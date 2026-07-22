# 🐛 Relatório de Bugs / Defeitos

---

### 🔴 [BUG-01] Permissão de Checkout com Carrinho Vazio
* **Caso de Teste Relacionado:** `Sauce-12: Impedir finalização de compra com carrinho vazio`
* **Severidade:** Média
* **Status:** Aberto
* **Ambiente:** Chrome / Windows 11 / Versão v1.0.0

#### 📝 Descrição
O sistema permite que o usuário avance para o checkout e conclua a compra mesmo estando sem nenhum produto adicionado no carrinho.

#### 🔄 Passos para Reproduzir
1. Acesse o site do SauceDemo e faça login.
2. Certifique-se de que o carrinho está totalmente vazio.
3. Clique no ícone do carrinho de compras.
4. Clique no botão **Checkout**.
5. Preencha os dados e finalize a compra.

#### ❌ Comportamento Atual
A compra é concluída com sucesso exibindo a mensagem `THANK YOU FOR YOUR ORDER`, mesmo sem itens no pedido.

#### ✅ Comportamento Esperado
O sistema deve exibir uma mensagem de erro indicando que o carrinho está vazio e bloquear o avanço para a tela de checkout.

#### 🎥 Evidência
* **Vídeo do Problema:** [Assistir gravação no Imgur](https://imgur.com/a/uKFoxJa)