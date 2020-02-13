var usuarios = usuarios();
var grupos = grupos();
document.addEventListener("DOMContentLoaded", function (event) {

    let url = new URL(window.location.href);
    let posicao = url.searchParams.get("posicao");

    document.getElementById('nome').value = usuarios[posicao]["nome"];
    document.getElementById('email').value = usuarios[posicao]["email"];
    document.getElementById('senha').value = usuarios[posicao]["senha"];

    document.getElementById('btn_salvar').addEventListener("click", function (event) {
        let uHolder = Usuario(document.getElementById('nome').value, document.getElementById('email').value, document.getElementById('senha').value);

        for (let g of grupos) {
            if (JSON.stringify(g["criador"]) === JSON.stringify(usuarios[posicao]) ) {
                g["criador"] = uHolder;
            }
        }
        usuarios[posicao] = uHolder;
        listJsonToLocalSorage(grupos, "grupos");
        listJsonToLocalSorage(usuarios, "usuarios");
        //location.reload(true);
        location.href=LOCAL_DOC+'/view/index.html';
    });
});