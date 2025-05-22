var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.buscarPerfil(resultadoAutenticar[0].idUsuario)
                            .then((resultadoPerfil) => {
                                if (resultadoPerfil.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].Email,
                                        nome: resultadoAutenticar[0].Nome,
                                    });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var Nome = req.body.nomeServer;
    var Email = req.body.emailServer;
    var Senha = req.body.senhaServer;
    var TipoJogador = req.body.tipoServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(Nome, Email, Senha, TipoJogador)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarFavorito(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var NomeFavorito = req.body.jogoServer;
    var TipoFavorito = req.body.tipoServer;
    var DescricaoFavorito = req.body.descricaoServer;
    var id = req.body.idServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarFavorito(NomeFavorito, TipoFavorito, DescricaoFavorito, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

    function BuscarFavorito(req, res) {
    
        var id = req.params.id;

    usuarioModel.BuscarFavorito(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhum jogo favorito encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os jogos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    function apagarFavorito(req, res){

        var idFavorito = req.body.idServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.apagarFavorito(idFavorito)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao apagar o jogo! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    autenticar,
    cadastrar,
    cadastrarFavorito,
    BuscarFavorito,
    apagarFavorito

}