var app = require("./config/server");

 var rotaHome = require("./app/routes/home");

rotaHome(app);

var rotaCoisas = require("./app/routes/coisas");
rotaCoisas(app);


var rotaAdmin = require("./app/routes/admin");
rotaAdmin(app);


app.listen(3000, () => {
    console.log("Servidor rodando com Express");
});