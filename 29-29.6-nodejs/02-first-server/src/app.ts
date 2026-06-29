import http from 'http';
const server = http.createServer((_req, res) => {
  console.log(_req);
  res.end('Hello, World!');
});

const PORT = 3000;

server.listen(3000);
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

