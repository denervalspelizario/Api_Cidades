import express, {  Request, Response } from 'express';

const server = express();

server.get('/', (res: Response, req: Request) => {
  return res.send('Ola DEV');
});

export { server };