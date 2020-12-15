var express = require("express")();

express.set("view engine","ejs");

express.get("/", (req,res) => {
    res.render("home/index");
});
express.get("/admin", (req,res) => {
    res.render("admin/form")
});

express.get("/coisas", (req,res) => {
    res.render("coisas/coisas");
});


express.listen(3000, () => {
    console.log("Servidor rodando com Express");
});