var grupos = grupos();
document.addEventListener("DOMContentLoaded", function (event) {

    var tableGrupos = document.querySelector("table#grupos");
    criarRows(grupos, tableGrupos, "grupos");
    
    //console.log(grupos[0]["criador"]);

    document.getElementById('btn_salvar').addEventListener("click", function (event) {
        let novoGrupo = Grupo(JSON.parse(document.getElementById('usuario_logado').value),document.getElementById('nome').value);
        console.log(novoGrupo);
        grupos.push(novoGrupo);
        listJsonToLocalSorage(grupos, "grupos");

        location.reload(true);
    });
});//JSON.parse(document.getElementById('usuario_logado').value)