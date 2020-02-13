var comentarioTemplate = { "criador": {}, "corpo": "",  "ratings": []};

function Comentario() {
    return Object.create(comentarioTemplate);
}

function Comeantario(usuario, corpo) {
    let novoComeantario = Object.create(comentarioTemplate);
    novoComeantario["criador"] = usuario
    novoComeantario["corpo"] = corpo;
    return novoComeantario;
}