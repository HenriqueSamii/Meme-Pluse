function criarRows(listaJson, tabela, nomeLocalS) {
    //let row = tabela.insertRow();
    let posicaoLista = 0;
    for (let json of listaJson) {
        criarRow(json, tabela, nomeLocalS, new Number(posicaoLista));
        posicaoLista++;
    }
}

function criarRow(json, tabela, nomeLocalS, posicaoLista) {
    let row = tabela.insertRow();
    row.insertCell().innerHTML = json["nome"];
    let detalhe = "detalhe";
    let deletar = "deletar";
    let editar = "editar";

    //row.insertCell().innerHTML = `<button id='${nomeLocalS + posicaoLista + detalhe}'>Relações</button>`;
    row.insertCell().innerHTML = `<a href= '${LOCAL_DOC}/view/${nomeLocalS}/${detalhe}.html?posicao=${posicaoLista}'`
        + `id='${nomeLocalS + posicaoLista + detalhe}'>Detalhe</a>`;
    /*document.getElementById(nomeLocalS + posicaoLista + detalhe).addEventListener("click", function (event) {
        //deletarItemLocalStorage(nomeLocalS, posicaoLista);
    });*/

    row.insertCell().innerHTML = `<a href= '${LOCAL_DOC}/view/${nomeLocalS}/${editar}.html?posicao=${posicaoLista}'`
        + `id='${nomeLocalS + posicaoLista + editar}'>Editar</a>`;
    /*document.getElementById(nomeLocalS + posicaoLista + editar).addEventListener("click", function (event) {
        
        var url = `file:///C:/Users/HenriqueCavalcantide/Downloads/AssessmentJavaScript/view/${nomeLocalS}/${editar}.html?posicao=${posicaoLista}`;
        window.location.href= url;
    });*/

    row.insertCell().innerHTML = `<button id='${nomeLocalS + posicaoLista + deletar}'>Deletar</button>`;
    document.getElementById(nomeLocalS + posicaoLista + deletar).addEventListener("click", function (event) {
        if (nomeLocalS == "usuarios") {
            let usuario = stringToJson(nomeLocalS)[posicaoLista];
            let gruposNaoDoUsuario = [];
            for (let g of stringToJson('grupos')) {
                if (JSON.stringify(g["criador"]) != JSON.stringify(usuario) ) {
                    gruposNaoDoUsuario.push(g);
                }
            }
            listJsonToLocalSorage(gruposNaoDoUsuario, "grupos");
        }

        deletarItemLocalStorage(nomeLocalS, posicaoLista);
        window.location.reload();
    });
}


//row.insertCell().innerHTML = "<button onclick='"+ deletarItemLocalStorage(nomeLocalS,posicaoLista)+"';>Deletar</button>";
//row.insertCell().innerHTML = "<input type='button' onclick='insert_Row()' value='Insert row'>";
//row.insertCell().innerHTML = "<button onclick='deletarItemLocalStorage("+nomeLocalS+","+posicaoLista+")';>Deletar</button>";
//row.insertCell().innerHTML = `<button onclick='deletarItemLocalStorage("${nomeLocalS}","${posicaoLista}");'>Deletar</button>`;
//document.getElementById(nomeLocalS+posicaoLista).onclick =  deletarItemLocalStorage(nomeLocalS,posicaoLista);
//row.insertCell().innerHTML = criarBottao(deletarItemLocalStorage(nomeLocalS,posicaoLista), "Deletar");
//row.insertCell().innerHTML.appendChild(criarBottao(deletarItemLocalStorage(nomeLocalS,posicaoLista), "Deletar"));
//document.body.appendChild(criarBottao(deletarItemLocalStorage(nomeLocalS,posicaoLista), "Deletar"));