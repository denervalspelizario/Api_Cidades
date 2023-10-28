import { server } from './server/Server';


server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor Funcionando na porta ${process.env.PORT || 3000}!!`);
});