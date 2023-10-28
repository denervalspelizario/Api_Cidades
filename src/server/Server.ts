import express from 'express';
import 'dotenv/config'; // importando o dotenv para poder .env funcionar
import { router } from './routes';


const server = express();

server.use(express.json());

server.use(router);

export { server };