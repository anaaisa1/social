const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como podemos melhorar o acesso à educação de qualidade para crianças de comunidades desfavorecidas?",
        alternativas: [
            " Implementar programas de bolsas de estudo e financiamento para estudantes de baixa renda, garantindo que possam frequentar escolas de qualidade.",
            " Investir na melhoria das infraestruturas e na formação de professores em escolas públicas localizadas em áreas desfavorecidas, para garantir um ensino de qualidade."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

