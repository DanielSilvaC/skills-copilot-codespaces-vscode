// Create web server
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servidor web rodando com sucesso!\n');
});

server.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});