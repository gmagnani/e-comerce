# 🛒 E-commerce Fullstack Moderno

Este é um projeto de e-commerce de alto desempenho, desenvolvido com as tecnologias mais recentes do ecossistema React e Next.js. O foco principal foi a criação de uma plataforma escalável, segura e com uma experiência de utilizador fluida, integrando gestão complexa de estados, persistência de dados e pagamentos reais.

## 🚀 Tecnologias e Ferramentas

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router).
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para robustez e segurança de tipos.
* **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/) para um design moderno e responsivo.
* **Base de Dados & ORM:** [PostgreSQL](https://www.postgresql.org/) com [Drizzle ORM](https://orm.drizzle.team/) para consultas eficientes e seguras.
* **Autenticação:** [Better Auth](https://www.better-auth.com/) para gestão completa de sessões, utilizadores e contas vinculadas.
* **Pagamentos:** Integração com [Stripe](https://stripe.com/) para processamento de checkout seguro.
* **Gestão de Estado & Cache:** [TanStack React Query](https://tanstack.com/query/latest) para sincronização de dados do servidor.
* **Componentes UI:** [Radix UI](https://www.radix-ui.com/) para acessibilidade e [Lucide React](https://lucide.dev/) para iconografia.
* **Formulários:** [React Hook Form](https://react-hook-form.com/) com validação via [Zod](https://zod.dev/).

## ✨ Funcionalidades Principais

* **Catálogo de Produtos Dinâmico:** Gestão de categorias e suporte a variantes de produtos (cores, imagens e preços específicos por variante).
* **Carrinho de Compras Persistente:** Sistema de carrinho vinculado ao utilizador na base de dados, permitindo a recuperação de itens entre dispositivos.
* **Gestão de Endereços:** Suporte para múltiplos endereços de entrega por utilizador.
* **Fluxo de Checkout Completo:** Integração nativa com o Stripe para pagamentos e criação automática de pedidos.
* **Rastreamento de Pedidos:** Histórico de compras com estados de pagamento (Pendente, Pago, Cancelado).
* **Segurança Avançada:** Autenticação robusta, proteção de rotas e validação de esquemas em todas as entradas de dados.

## 🛠️ Arquitetura da Base de Dados

A base de dados foi desenhada para suportar operações complexas de retalho, incluindo:
* **Utilizadores e Autenticação:** Tabelas `user`, `session`, `account` e `verification`.
* **Produtos e Inventário:** Estrutura relacional entre `category`, `product` e `product_variant`.
* **Vendas:** Relacionamentos entre `cart`, `cart_item`, `order` e `order_item`.

## 🏁 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_TEU_REPOSITORIO]
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração de Ambiente:**
    Crie um ficheiro `.env` na raiz e configure as variáveis para o PostgreSQL (DATABASE_URL) e as chaves do Stripe.

4.  **Migrações do Banco de Dados:**
    ```bash
    npx drizzle-kit push
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
