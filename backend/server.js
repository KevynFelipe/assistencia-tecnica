const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('>>> JSON Server running on http://localhost:3000');
  console.log('>>> Recursos: /funcionarios, /clientes, /equipamentos, /ordens, /estoque, /mensagens, /chamados');
});
