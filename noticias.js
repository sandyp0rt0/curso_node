

var http = require("http");

var server = http.createServer((req,res) => {
    var categoria = req.url;
    if(categoria=='/tecnologia'){
        res.end("<html><body>Tecnologia</body></html>");
    }else{
        res.end("<html><body>Site da Sandy</body></html>");
    }
    
});

server.listen(3000);


























console.log("Criando um site de currículo com NodeJS");