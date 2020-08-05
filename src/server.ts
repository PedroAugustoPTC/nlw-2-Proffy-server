import express from 'express';

//Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:

//Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
//Integrar "view engines" para inserir dados nos templates.
//Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
//Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

const app = express();

app.use(express.json);

app.get('/', (request, response) => {
    return response.json({message: 'Hello Wolrd'});
});

app.listen(3333); // Espera a requisição HTTP do cliente atravé da porta 3333