var usuarios = usuarios();
document.addEventListener("DOMContentLoaded", function (event) {

    var tableUsuarios = document.querySelector("table#usuarios");
    criarRows(usuarios, tableUsuarios, "usuarios");

    document.getElementById('btn_salvar').addEventListener("click", function (event) {
        let novoUsuario = Usuario(document.getElementById('nome').value, document.getElementById('email').value, document.getElementById('senha').value);
        console.log(novoUsuario);
        usuarios.push(novoUsuario);
        listJsonToLocalSorage(usuarios, "usuarios");

        //criarRow(novoUsuario,tableUsuarios);
        //usuarios = usuarios();
        location.reload(true);

        /*document.querySelector("div#usuarios").appendChild(

        );*/
    });
});