
var conn = require("../../config/database");


module.exports = (app) => {

    var db = conn();

    app.get("/coisas", (req,res) => {
        db.query("select * from coisas",(err,result)=>{
            res.render("coisas/coisas",{coisas:result});
        });
    });
}

