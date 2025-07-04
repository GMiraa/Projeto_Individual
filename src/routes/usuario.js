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

router.post("/alterarDados", function (req, res) {
    usuarioController.alterarDados(req, res);
});

router.get("/BuscarQuantidade/:id", function (req, res) {
    usuarioController.BuscarQuantidade(req, res);
})

router.get("/GenerosIndividual/:id", function (req, res) {
    usuarioController.GenerosIndividual(req, res);
})

router.get("/GenerosPublico/", function (req, res) {
    usuarioController.GenerosPublico(req, res);
})

router.get("/KpiPublico/", function (req, res) {
    usuarioController.KpiPublico(req, res);
})

router.get("/KPIquiz/", function (req, res) {
    usuarioController.KPIquiz(req, res);
})

router.get("/infosJogos/:idJogo", function (req, res) {
    usuarioController.infosJogos(req, res);
})

router.post("/InserirResultado", function (req, res) {
    usuarioController.InserirResultado(req, res);
})


module.exports = router;