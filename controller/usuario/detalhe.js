var usuarios = usuarios();
document.addEventListener("DOMContentLoaded", function (event) {

    let url = new URL(window.location.href);
    let posicao = url.searchParams.get("posicao");

    document.getElementById('nome').innerHTML = usuarios[posicao]["nome"];
    document.getElementById('email').innerHTML = usuarios[posicao]["email"];
    document.getElementById('senha').innerHTML = usuarios[posicao]["senha"];
});