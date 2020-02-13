var avaliacaoTemplate = { "criador": {}, "gosto": true};

function Avaliacao() {
    return Object.create(avaliacaoTemplate);
}

function Avaliacao(usuario, gosot) {
    let novaAvaliacao = Object.create(avaliacaoTemplate);
    novaAvaliacao["criador"] = usuario
    novaAvaliacao["gosto"] = gosot;
    return novaAvaliacao;
}