import http from 'http';
import path from 'path';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), "utf8", (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), "utf8", (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
    if (req.url === '/api/users') {
        const users = [
            { name: "Bob Smith", age: 40 }, { name: "John Doe", age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

// Environment variable
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));