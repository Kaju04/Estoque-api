import dotenv from 'dotenv';
dotenv.config ();
import db from './src/database/database.js'

import {loggerMiddleware} from './src/middleware/index.js'
import express, { json, urlencoded } from 'express';

const app = express();
const port = 3000;

//middleware to formatar o body para json
app.use(json());
//para formatar os dados do formulário (x-www-form-uelencoded)
app.use(urlencoded({extended: true }));

app.use(loggerMiddleware)

app.get('/', function(req,res){
    res.status(200).json({
        "status": "ok",
        "codigo": 200,
        "mensagem": `Bem vindo`
    })
});

app.post('/produtos',(req,res) => {
    let produto = req.body

    //res.send(`o produto foi criado! Nome: ${produto.nome}, valor: ${produto.preco}`)
    //res.send('o produto foi criado!')
    res.status(201).json({
        "status": "criado",
        "codigo": 201,
        "mensagem": `o produto foi criado! Nome: ${produto.nome}, valor: ${produto.preco}`
    })
})

app.put('/produtos/:id', (req,res) => {
    let id = req.params.id
    let produto = req.body

    res.status(200).json({
        "status": "alterado",
        "codigo": 200,
        "mensagem":`o produto ${id} foi alterado!`
    })

})

app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id
    res.status(200).json({
        "status": "deletado",
        "codigo": 200,
        "mensagem":`o produto ${id} foi removido`
    })
})


app.get('/usuarios', (req,res) => {
    db('usuarios').select('*')
        res.status(200).json({
        "status": "ok",
        "codigo": 200,
        "mensagem": usuasrios
    })
})

.catch((error)=>{
    res.status(500).json({
        "status": "erro",
        "codigo": 500,
        "mensagem": "erro ao buscar usuarios"
    })
})

app.listen(port, function (){
    console.log('servidor rodando na porta' + port)
})