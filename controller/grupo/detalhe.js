var grupos = grupos();
document.addEventListener("DOMContentLoaded", function (event) {
    let url = new URL(window.location.href);
    let posicao = url.searchParams.get("posicao");

    //document.getElementById('nome').value = grupos[posicao]["nome"];
    //Detalhes do grupo ///////////////////////////////////
    let nomeGrupo = document.querySelector("div#nome_grupo");
    let h1 = document.createElement("H1");
    //h1.className = "nome_grupo";
    let titulo1 = document.createTextNode(grupos[posicao]["nome"]);
    h1.appendChild(titulo1);
    nomeGrupo.appendChild(h1);

    let nomeCriador = document.querySelector("div#criador_grupo");
    let para = document.createElement("P");
    //para.className = "corpo_meme";
    let corpo = document.createTextNode("Criador do Grupo:" + grupos[posicao]["criador"]["nome"]);
    para.appendChild(corpo);
    nomeCriador.appendChild(para);

    //Renderizar Memes ////////////////////////////////////
    let divMemes = document.querySelector("div#memes");
    if (!grupos[posicao]["memes"] || grupos[posicao]["memes"].length <= 0) {
        divMemes.innerHTML = `<p class='sem_memes'>Este Grupo Não tem Memes<p>`
    } else {
        let listMemesRev = grupos[posicao]["memes"].reverse();
        for (let i in listMemesRev) {
            let memeRenderizado = listMemesRev[i];
            //divMemes.innerHTML = `<div class='meme' id='meme${i}'></div>`
            //let memeDiv = document.getElementById("meme" + i);
            //memeDiv.insertAdjacentHTML(`<p class='titulo_meme'>${memeRenderizado["titulo"]}<p>`);

            let div = document.createElement("DIV");
            div.className = "meme";
            div.id = "meme" + i;
            divMemes.appendChild(div);

            let memeDiv = document.getElementById("meme" + i);

            let h2 = document.createElement("H2");
            h2.className = "titulo_meme";
            let titulo = document.createTextNode(memeRenderizado["titulo"]);
            h2.appendChild(titulo);
            memeDiv.appendChild(h2);

            let para = document.createElement("P");
            para.className = "corpo_meme";
            let corpo = document.createTextNode(memeRenderizado["corpo"]);
            para.appendChild(corpo);
            memeDiv.appendChild(para);
        }
    }



    document.getElementById('btn_salvar').addEventListener("click", function (event) {
        if (!grupos[posicao]["memes"]) {
            grupos[posicao]["memes"] = [];
        }
        let novoMeme = Meme(
            JSON.parse(document.getElementById('usuario_logado').value),
            document.getElementById('titulo').value,
            document.getElementById('corpo').value/*,
            document.getElementById('midia').value*/
        );
        grupos[posicao]["memes"].push(novoMeme);
        listJsonToLocalSorage(grupos, "grupos");

        location.reload(true);
    });
});