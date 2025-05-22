var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarFavorito", function (req, res) {
    usuarioController.cadastrarFavorito(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/apagarFavorito", function (req, res) {
    usuarioController.apagarFavorito(req, res);
});

router.get("/BuscarFavorito/:id", function (req, res) {
    usuarioController.BuscarFavorito(req, res);
})

module.exports = router;