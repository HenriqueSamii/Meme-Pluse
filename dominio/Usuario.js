var usuarioTemplate = { "nome": "", "email": "", "senha": ""};

function Usuario() {
    return Object.create(usuarioTemplate);
}

function Usuario(nome, email, senha) {
    let novoUsuario = Object.create(usuarioTemplate);
    //novoUsuario["id"] = getNextId(usuarios);//1;//getNextId(usuarioTemplate);
    novoUsuario["nome"] = nome
    novoUsuario["email"] = email;
    novoUsuario["senha"] = senha;
    return novoUsuario;
}



/*var usuarioTemplate = { "nome": "", "email": "", "senha": "", "memesGostados": []};

function Usuario() {
    return Object.create(usuarioTemplate);
}

function Usuario(nome, email, senha) {
    let novoUsuario = Object.create(usuarioTemplate);
    //novoUsuario["id"] = getNextId(usuarios);//1;//getNextId(usuarioTemplate);
    novoUsuario["nome"] = nome
    novoUsuario["email"] = email;
    novoUsuario["senha"] = senha;
    return novoUsuario;
}
function Usuario(nome, email, senha, memesGostados) {
    let novoUsuario = Object.create(usuarioTemplate);
    novoUsuario["nome"] = nome
    novoUsuario["email"] = email;
    novoUsuario["senha"] = senha;
    novoUsuario["memesGostados"] = memesGostados;
    return novoUsuario;
}*/
/*function getNextId(json) {
    let holder = 0;
    for (const item of json) {
        if (item["id"] > holder) {
            holder = item["id"];
        }
    }
    return (holder + 1);
}*/