const http = require('http');
const url = require('url');
const querystring = require('querystring');

let requestCount = 0;
const dictionary = {};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);
    const path = parsedUrl.pathname;
    let body = '';

    requestCount++;

    res.setHeader('Content-Type', 'application/json');

    if (path === '/api/definitions' && req.method === 'GET') {
        if (query.word && dictionary[query.word]) {
            res.writeHead(200);
            res.end(JSON.stringify({ requestCount, definition: dictionary[query.word] }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ requestCount, message: `Request# ${requestCount}, word '${query.word}' not found!` }));
        }
    } else if (path === '/api/definitions' && req.method === 'POST') {
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { word, definition } = JSON.parse(body);

            if (!word || !definition) {
                res.writeHead(400);
                res.end(JSON.stringify({ requestCount, message: 'Both word and definition are required.' }));
                return;
            }

            if (dictionary[word]) {
                res.writeHead(409);
                res.end(JSON.stringify({ requestCount, message: `Warning! '${word}' already exists.` }));
            } else {
                dictionary[word] = definition;
                res.writeHead(201);
                res.end(JSON.stringify({ requestCount, message: `New entry recorded: "${word} : ${definition}"` }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ requestCount, message: 'Not Found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
