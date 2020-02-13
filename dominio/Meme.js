var memeTemplate = { "criador": {}, "titulo": "", "corpo": "", "midia": "", "ratings": [], "comentarios": []};

function Meme() {
    return Object.create(memeTemplate);
}

function Meme(usuario, titulo, corpo) {
    let novoMeme = Object.create(memeTemplate);
    novoMeme["criador"] = usuario
    novoMeme["titulo"] = titulo
    novoMeme["corpo"] = corpo;
    return novoMeme;
}

function Meme(usuario, titulo, corpo, midia) {
    let novoMeme = Object.create(memeTemplate);
    novoMeme["criador"] = usuario
    novoMeme["titulo"] = titulo
    novoMeme["corpo"] = corpo;
    novoMeme["midia"] = midia;
    return novoMeme;
}