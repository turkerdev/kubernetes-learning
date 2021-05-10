var http = require('http');
var fs = require('fs')

let file;

fs.readFile('./test.html', (error, data) => {
    if (error)
        console.log(error)
    file = data
})


http.createServer(function (req, res) {
    res.writeHead(200);
    res.write(file)
    res.end()
}).listen(8080);