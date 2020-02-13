//Confirmar que os dominios no local strorage existe, com dados de exemplo ///////////////////////////

var LOCAL_DOC = "";

document.addEventListener("DOMContentLoaded", function (event) {

    let scripts = document.getElementsByTagName("script"),
        src = scripts[6].src;
    let holder = src.split("/");
    holder.pop();
    LOCAL_DOC = holder.join("/")
    //console.log(scripts);
    //console.log(LOCAL_DOC);
    let usuariosLogados = stringToJson('usuarios');
    let selectUsuarios = document.getElementById('usuario_logado');
    for (let n of usuariosLogados) {
        let opt = document.createElement('option');
        opt.value = JSON.stringify(n);
        opt.innerHTML = n["nome"];
        selectUsuarios.appendChild(opt);
    }
});

var listaDeLocalSorageDominios = ["usuarios", "grupos"];
var listaDeLocalSorageDominiosExistentes = [];

for (let dominio of listaDeLocalSorageDominios) {
    listaDeLocalSorageDominiosExistentes.push(localStorage.getItem(dominio) == null);
}

if (listaDeLocalSorageDominiosExistentes[0] || listaDeLocalSorageDominiosExistentes[1]) {

    let u1 = Usuario("nome1", "nome1@email.com", "123");
    let u2 = Usuario("nome2", "nome2@email.com", "345");

    let g1 = Grupo(u1, "Grupo teste 1");
    let g2 = Grupo(u1, "Grupo teste 2");

    let usuarios = [u1, u2];
    let grupos = [g1, g2];

    let listaTemp = [usuarios, grupos];

    for (let d in listaDeLocalSorageDominios) {
        if (listaDeLocalSorageDominiosExistentes[d]) {
            listJsonToLocalSorage(listaTemp[d], listaDeLocalSorageDominios[d]);
        }
    }
};

// Generico /////////////////////////

// Salvar Lista em LocalSorage
function listJsonToLocalSorage(listaJson, nomeLocalSorage) {
    let holderListLS = [];
    for (let j of listaJson) {
        holderListLS.push(JSON.stringify(j));
    }
    localStorage.setItem(nomeLocalSorage, holderListLS);
}
// Pegar Lista de LocalSorage
function stringToJson(string) {
    return JSON.parse("[" + localStorage.getItem(string) + "]");
}
//LocalSorage deletar Item
function deletarItemLocalStorage(nomeLocalS, posicaoArr) {
    let lista = stringToJson(nomeLocalS);
    //delete lista[posicaoArr];
    if (posicaoArr > -1) {
        lista.splice(posicaoArr, 1);
    }
    listJsonToLocalSorage(lista, nomeLocalS);
}


//Listar do LocalSorage - Dominios /////////////////

function usuarios() {
    return stringToJson('usuarios');
}

function grupos() {
    return stringToJson('grupos');
}
