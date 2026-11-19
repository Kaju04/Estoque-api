import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import loggerMiddleware from './src/middleware/logger.js';
const app = express();
const port = 3000;

// Middleware para formatar o body JSON
app.use(json());

// Middleware para formatar dados de formulário
app.use(urlencoded({ extended: true }));

// Aplicação dos middlewares
app.use(loggerMiddleware);
app.use(valorProdutoMiddleware);

// Rota principal
app.get('/', (req, res) => {
    
res.status(200).json({
        "status": "Ok",
        "codigo": 200,
        "mensagem": `Bem vindo!`
    });
});

// Criar produto
app.post('/produtos', (req, res) => {
    let produto = req.body;
    res.status(201).json({
        "status": "produto criado",
        "codigo": 201,
        "mensagem": `O produto ${produto.nome} foi criado com sucesso!`
    });
});


// Alterar produto
app.put('/produtos/:id', (req, res) => {
    let id = req.params.id;
    let produto = req.body;
        res.status(200).json({
        "status": "Produto alterado",
        "codigo": 200,
        "mensagem": `O produto ${produto.nome} foi alterado com sucesso!`
    });
});

// Deletar produto
app.delete('/produtos/:id', (req, res) => {
    let id = req.params.id;
    res.status(200).json({
        "status": "Produto deletado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi deletado com sucesso!`
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
