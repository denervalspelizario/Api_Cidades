import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json('Ola DEV');
});


router.get('/teste', (req: Request, res: Response) => {
  console.log(req.query);
  
  return res.status(StatusCodes.BAD_GATEWAY).json(req.body);
});


export { router };