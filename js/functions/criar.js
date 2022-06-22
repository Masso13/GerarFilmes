const datenow = new Date();
const ano_atual = datenow.getFullYear();

function criarFilmesLancamentos(filmes) {
    let lancamentos = document.getElementById("lancamentos-cards");
    let organizacao = {
        data: [],
        filmes: []
    };
    for (let filme of filmes) {
        let ano = filme.data_lancamento[0]
        let mes = filme.data_lancamento[1]-1
        let dia = filme.data_lancamento[2]

        if (ano>=ano_atual-1) {
            let data = new Date(ano, mes, dia);
            organizacao.data[organizacao.data.length] = data;
            organizacao.filmes[organizacao.filmes.length] = filme;
        }
    }

    for (let data of organizacao.data.sort()) {
        let index = organizacao.data.indexOf(data);
        console.log(organizacao.filmes[index])
    }

    console.log(organizacao.data.sort())
}

function criarElementoFilme(filme, placeholder) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "card-img";
    img.src = filme.imagem;

    let info = document.createElement("div");
    info.className = "card-info";
    let p = document.createElement("p");
    p.innerText = filme.titulo;
    p.className = "subtitle";
    info.appendChild(p);

    card.appendChild(img);
    card.appendChild(info);

    placeholder.appendChild(card);
}