var grupoTemplate = { "criador": 0, "nome": "", "memes": []};

function Grupo() {
    return Object.create(grupoTemplate);
}

function Grupo(usuario, nome) {
    let novoGrupo = Object.create(grupoTemplate);
    novoGrupo["criador"] = usuario
    novoGrupo["nome"] = nome;
    return novoGrupo;
}

function Grupo(usuario, nome,memes) {
    let novoGrupo = Object.create(grupoTemplate);
    novoGrupo["criador"] = usuario
    novoGrupo["nome"] = nome;
    novoGrupo["memes"] = memes;
    return novoGrupo;
}

/*var grupoTemplate = { "criador": {}, "nome": "", "todosPodemPostar": true,  "todosPodemVer": true, "parceiros": []};

function Grupo() {
    return Object.create(grupoTemplate);
}

function Grupo(usuario, nome) {
    let novoGrupo = Object.create(grupoTemplate);
    novoGrupo["criador"] = usuario
    novoGrupo["nome"] = nome;
    return novoGrupo;
}

function Grupo(usuario, nome, todosPodemPostar, todosPodemVer) {
    let novoGrupo = Object.create(grupoTemplate);
    novoGrupo["criador"] = usuario
    novoGrupo["nome"] = nome;
    novoGrupo["todosPodemPostar"] = todosPodemPostar
    novoGrupo["todosPodemVer"] = todosPodemVer;
    return novoGrupo;
}

function Grupo(usuario, nome, todosPodemPostar, todosPodemVer, parceiros) {
    let novoGrupo = Object.create(grupoTemplate);
    novoGrupo["criador"] = usuario
    novoGrupo["nome"] = nome;
    novoGrupo["todosPodemPostar"] = todosPodemPostar
    novoGrupo["todosPodemVer"] = todosPodemVer;
    novoGrupo["parceiros"] = parceiros;
    return novoGrupo;
}*/