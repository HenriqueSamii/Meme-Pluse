var usuarios = usuarios();
var grupos = grupos();
document.addEventListener("DOMContentLoaded", function (event) {

    var tableUsuarios = document.querySelector("table#usuarios");
    criarRows(usuarios, tableUsuarios, "usuarios");

    var tableGrupos = document.querySelector("table#grupos");
    criarRows(grupos, tableGrupos, "grupos");
    
    //console.log(grupos[0]["criador"]);

    /*document.getElementById('btn_salvar').addEventListener("click", function (event) {
        var novoUsuario = Usuario(document.getElementById('nome').value, document.getElementById('email').value, document.getElementById('senha').value);
        console.log(novoUsuario);
        usuarios.push(novoUsuario);
        listJsonToLocalSorage(usuarios, "usuarios");

        //criarRow(novoUsuario,tableUsuarios);
        //usuarios = usuarios();
        location.reload(true);
    });*/
});