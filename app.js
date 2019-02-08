const express = require('express');
const app = express();

app.get('/', () => {
    res.send('index page');
});

app.get('/random/:numeroInicial/:numeroFinal',(req,res) => {
    console.log('Sin Parse Numero Inicial',typeof req.params.numeroInicial, req.params.numeroInicial);
    console.log('Sin Parse Numero Final',typeof req.params.numeroFinal, req.params.numeroFinal);

    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);

    if (isNaN(min) || isNaN(max))
    {
        res.status(406);
        res.json({"error": 'Bad Request'});
        return;
    }

    console.log('Con Parse Numero Inicial',typeof min, min);
    console.log('Con Parse Numero Final',typeof max, max);

    const result = Math.floor(Math.random() * (max - min) + min);

    res.json({"randomNumber": result});
})


app.listen(3000, () => {
    console.log('server on port 3000');
});