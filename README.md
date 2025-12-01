# 🚀 Jitterbit Orders API

API completa desenvolvida em **Node.js + Express**, com:

* CRUD de pedidos
* Transformação dos dados conforme solicitado no PDF
* Banco PostgreSQL
* Autenticação JWT
* Documentação Swagger (OpenAPI 3.0) em `/api-docs`
* Código organizado por camadas (controllers, models, routes)

---

# 📁 Estrutura do Projeto

```
project/
 ├─ src/
 │   ├─ config/
 │   │   └─ db.js
 │   ├─ controllers/
 │   │   └─ orderController.js
 │   ├─ middleware/
 │   │   └─ auth.js
 │   ├─ models/
 │   │   └─ orderModel.js
 │   ├─ routes/
 │   │   ├─ authRoutes.js
 │   │   └─ orderRoutes.js
 │   └─ server.js
 ├─ package.json
 └─ README.md
```

---

# 🛠 Tecnologias Utilizadas

* Node.js
* Express
* PostgreSQL (pg)
* JWT (jsonwebtoken)
* Swagger (swagger-jsdoc + swagger-ui-express)
* CORS

---

# 🧪 Como Rodar o Projeto

### 1️⃣ Instale as dependências

```bash
npm install
```

### 2️⃣ Configure o Banco PostgreSQL

Crie o banco chamado `jitterbit`.

Execute as tabelas:

```sql
CREATE TABLE Orders (
  orderId VARCHAR(255) PRIMARY KEY,
  value NUMERIC,
  creationDate TIMESTAMP
);

CREATE TABLE Items (
  id SERIAL PRIMARY KEY,
  orderId VARCHAR(255),
  productId INT,
  quantity INT,
  price NUMERIC,
  FOREIGN KEY (orderId) REFERENCES Orders(orderId)
);
```

### 3️⃣ Configure a conexão no arquivo `src/config/db.js`

```js
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "senha",
  database: "jitterbit",
  port: 5432
});
```

### 4️⃣ Inicie o servidor

```bash
npm start
```

Servidor rodando em:
👉 [http://localhost:3000](http://localhost:3000)
Swagger:
👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

# 🔐 Autenticação JWT

Antes de acessar qualquer rota de pedido, faça login:

### **POST /login**

```json
{
  "username": "admin",
  "password": "senha123"
}
```

Retorno:

```json
{
  "token": "TOKEN_AQUI"
}
```

Use o token em todas as requisições:

```
Authorization: Bearer SEU_TOKEN
```

---

# 📚 Documentação Swagger

A documentação completa está disponível em:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

O Swagger contém:

* Descrição de cada endpoint
* Parâmetros
* Schemas JSON
* Exemplos de requisição
* Botão **Authorize** para inserir o JWT

---

# 📦 Endpoints da API

## 🔑 **Autenticação**

### POST `/login`

Retorna o token JWT.

---

## 📌 **Pedidos** (todas exigem JWT)

### **POST /order**

Cria um novo pedido.

**Body (exemplo original):**

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

**Transformação aplicada internamente:**

```json
{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

### **GET /order/:id**

Retorna um pedido pelo ID.

### **GET /order/list**

Lista todos os pedidos.

### **PUT /order/:id**

Atualiza o pedido.

### **DELETE /order/:id**

Deleta o pedido.

---

# 🧠 Fluxo Completo

1. Fazer login → receber JWT
2. Usar JWT no header
3. Criar, listar, editar ou deletar pedidos
4. Ver documentação no Swagger

---

# 🧩 Possíveis Melhorias Futuras

* Refresh Token
* Rate Limiting
* Logs estruturados
* Testes automatizados (Jest)
* Dockerfile + docker-compose

---

# 🎉 Finalizado

A API está completamente funcional e documentada com Swagger.
Se quiser, também posso gerar o **repositório completo**, com todos os arquivos prontos para subir no GitHub.
