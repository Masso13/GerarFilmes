const datenow = new Date();
const ano_atual = datenow.getFullYear();

function criarFilmesLancamentos() {
    let lancamentos_cards = document.getElementById("lancamentos-cards");
    let lancamentos = pegarLancamentos();
    let lancamentos_organizados = organizarLancamentos(lancamentos);

    //console.log(lancamentos);
    console.log(lancamentos_organizados)
    for (filme of lancamentos_organizados) {
        criarElementoFilme(filme, lancamentos_cards)
    }
}

function organizarLancamentos(lancamentos) {
    for (let i2 = 0; i2 < lancamentos.length-1; i2++) {
        for (let i = 0; i < lancamentos.length-1; i++) {
            let filme1 = lancamentos[i];
            let ano = filme1.data_lancamento[0];
            let mes = filme1.data_lancamento[1];
            let dia = filme1.data_lancamento[2];

            let filme2 = lancamentos[i+1];
            let ano2 = filme2.data_lancamento[0];
            let mes2 = filme2.data_lancamento[1];
            let dia2 = filme2.data_lancamento[2];

            if (ano < ano2) {
                lancamentos[i] = filme2;
                lancamentos[i+1] = filme1;
            }
        }
    }
    return lancamentos;
}

function pegarLancamentos() {
    let lancamentos = [];

    for (let filme of filmes) {
        let ano = filme.data_lancamento[0];
        if (ano >= ano_atual-1) {
            lancamentos[lancamentos.length] = filme;
        }
    }
    return lancamentos;
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