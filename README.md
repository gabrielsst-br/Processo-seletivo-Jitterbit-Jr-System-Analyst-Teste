# 📝 Respostas do Teste Teórico — Jitterbit

A seguir estão **todas as respostas** do teste teórico (exceto o desafio, conforme solicitado).

---

# 📌 JavaScript

### **1. Operador lógico de negação**

**Resposta:** c) `!`

### **2. Método que adiciona elemento ao final do array**

**Resposta:** a) `push()`

### **3. O que faz o `Array.map()`**

**Resposta:** b) Mapeia os elementos para um novo array com base em uma função.

### **4. Função do `Array.filter()`**

**Resposta:** b) Filtra elementos com base em uma condição.

### **5. O que é async/await**

**Resposta:** c) Palavras-chave que tornam funções assíncronas mais legíveis.

### **6. Sintaxe correta de função assíncrona**

**Resposta:** c) `async function getData() { return new Promise({}); }`

### **7. Resultado do switch**

**Resposta:** b) `A`

### **8. Função somaImpares**

```js
function somaImpares(n) {
  let soma = 0;
  for (let i = 1; i <= n; i += 2) {
    soma += i;
  }
  return soma;
}
```

### **9. Função inverterPalavra**

```js
function inverterPalavra(texto) {
  return texto.split("").reverse().join("");
}
```

### **10. Saída das funções dividirNumeros**

* **a)** 10
* **b)** "Erro: Divisão por zero não é permitida."
* **c)** 7

### **11. Mapeamento de array JSON**

```js
const nomes = pessoas.map(p => p.nome);
```

### **12. O que são variáveis**

Variáveis armazenam valores. Exemplos:

```js
let idade = 25;
const PI = 3.14;
var nome = "Ana";
```

### **13. Múltiplas condições com if/else**

```js
if (idade >= 18 && possuiDocumento) {}
if (temperatura < 10 || chovendo) {}
```

### **14. Sintaxe do try**

```js
try {
  let resultado = JSON.parse(texto);
} catch (erro) {
  console.log("Erro ao converter:", erro.message);
}
```

### **15. Lançar exceção com throw**

```js
function validarIdade(idade) {
  if (idade < 0) {
    throw new Error("Idade inválida.");
  }
}
```

---

# 📌 SQL

### **1. Selecionar todas as colunas**

**Resposta:** b) `SELECT *`

### **2. Comando para filtrar**

**Resposta:** d) `WHERE`

### **3. Ordenar resultados**

**Resposta:** d) `ORDER BY`

### **4. Inserir dados**

**Resposta:** b) `INSERT`

### **5. Atualizar dados**

**Resposta:** b) `UPDATE`

---

# 📌 Integração de Sistemas

### **1. O que é integração de sistemas**

**Resposta:** a)

### **2. O que significa API**

**Resposta:** c)

### **3. O que é Web Service**

**Resposta:** c)

### **4. O que é token de acesso**

**Resposta:** c)

### **5. O que é um webhook**

**Resposta:** d)

### **6. O que é JSON**

**Resposta:** c)

### **7. Status HTTP de sucesso**

**Resposta:** a) `200 OK`

### **8. O que são headers HTTP**

**Resposta:** b)

### **9. Delimitadores XML**

**Resposta:** d) `< >`

### **10. Diferença entre integração síncrona e assíncrona**

**Resposta:** a) Síncrona = resposta imediata; Assíncrona = resposta posterior.

---

Se quiser transformar este README em **PDF**, **Markdown separado**, ou deixá-lo mais bonito, posso gerar isso para você.
