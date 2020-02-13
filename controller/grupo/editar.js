var grupos = grupos();
document.addEventListener("DOMContentLoaded", function (event) {

    let url = new URL(window.location.href);
    let posicao = url.searchParams.get("posicao");

    document.getElementById('nome').value = grupos[posicao]["nome"];

    document.getElementById('btn_salvar').addEventListener("click", function (event) {
        grupos[posicao]["nome"] = document.getElementById('nome').value;
        listJsonToLocalSorage(grupos, "grupos");
        //location.reload(true);
        location.href=LOCAL_DOC+'/view/index.html';
    });
});