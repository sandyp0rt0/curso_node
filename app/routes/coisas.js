module.exports = (app) => {

    

    app.get("/coisas", (req,res) => {


        var mysql = require("mysql");
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'senharoot',
            database: 'sandy'
        });


        conn.query("select * from coisas",(err,result)=>{res.send(result)});
        //res.send("coisas/coisas");
    });
}

