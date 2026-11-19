export default function (req, res, next) {
    console.log(`Uma requisição foi feita: body: ${req.body.nome}, params: ${req.params.id}`);
    const inicio = Date.now();

    res.on('finish', () => {
        const duracao = Date.now() - inicio; 
        const mensagem = `[LOG] ${req.method} ${req.url} - status: ${res.statusCode} ({${duracao}ms)`;
        console.log(mensagem);

    })
    next()
}

