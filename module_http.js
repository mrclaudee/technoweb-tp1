const http = require('http');
const { parse } = require('querystring');

http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = parse(body);
            console.log("Données envoyées à l'URL : " + req.url);
            console.log(data);
            res.write('Data du formulaire : ' + JSON.stringify(data));
            res.end();
        });
    } else {
        res.write('Réponse HTTP par défaut.');
        res.end();
    }
}).listen(8080);
