// Rather than spinning up an entire new php-fpm socket, run this

const http = require("http");
const date = new Date();
const curISODate = date.toISOString();

//try {
http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(request.headers['x-forwarded-for'] + '\n');
        response.end();
        console.log(`${request.headers['x-forwarded-for']} [${curISODate}] ${request.headers['user-agent']}`);
}).listen(8080);
//} catch (e) {
//      console.log(e.stack);
//}
console.log('Listening on port 8080');
