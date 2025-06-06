//const { cadastrarFavorito } = require("../controllers/usuarioController");
var database = require("../database/config")

function buscarPerfil(idUsuario){

    var instrucaoSql = `SELECT * FROM usuario WHERE idUsuario = ${idUsuario}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function autenticar(Email, Senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", Email, Senha)
    var instrucaoSql = `
        SELECT idUsuario, Nome, Email, TipoJogador FROM usuario WHERE Email = '${Email}' AND Senha = '${Senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros utilizados na Controller. Vá para a var instrucaoSql
function cadastrar(Nome, Email, Senha, TipoJogador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", Nome, Email, Senha, TipoJogador);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (Nome, Email, Senha, TipoJogador) VALUES ('${Nome}', '${Email}', '${Senha}', '${TipoJogador}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarFavorito(NomeFavorito, TipoFavorito, DescricaoFavorito, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFavorito():", NomeFavorito, TipoFavorito, DescricaoFavorito, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO favoritos (Nome, Estilo, Descrição, FkUsuario) VALUES ('${NomeFavorito}', '${TipoFavorito}', '${DescricaoFavorito}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function BuscarFavorito(id){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function BuscarFavorito():", id);

    var instrucaoSql = `
        SELECT idFavorito, Nome, Estilo, Descrição FROM favoritos WHERE FkUsuario = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function apagarFavorito(idFavorito){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function BuscarFavorito():", idFavorito);

    var instrucaoSql = `
        DELETE FROM favoritos WHERE idFavorito = '${idFavorito}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alterarDados(Email, Tipo, idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDados():", Email, Tipo, idUsuario);

    var instrucaoSql = `
        UPDATE usuario SET Email = "${Email}", TipoJogador = "${Tipo}" WHERE idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    buscarPerfil,
    cadastrar,
    cadastrarFavorito,
    BuscarFavorito,
    apagarFavorito,
    alterarDados
};