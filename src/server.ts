import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config(); //pegando as configs do arquivo .env

const server = express(); //startando o server com o express

//configurando o view engine para mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//setando o caminho estático da pasta public
server.use(express.static(path.join(__dirname, '../public')));

//configurando rotas
server.use(mainRoutes);

//rota para página 404
server.use((req, res)=>{
    res.render('pages/404');
});

// configurando a porta na qual o server irá rodar -- pegando informação do arquivo .env
server.listen(process.env.PORT);