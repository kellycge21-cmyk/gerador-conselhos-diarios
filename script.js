const conselhos = [
    "Acredite em você mesmo." , "O primeiro passo é o mais importante.",
    "A persistência realiza o impossível.","Aprenda algo novo hoje",
    "Seja gentil com todos que encontrar."
]
const conselhoTexto = document.getElementById('conselhoTexto');
const novoconselhoBtn - document.getElementById('novoConselhoBtn');

function gerarConelho() {
    //BUG INTENCIONAL AQUI
    const indice = Math.floor(Math.random() * (conselhos.length +1));
conselhoTexto.textContent = conselhos[indice];
}
novoconselhoBtn.addEventListener('click' , gerarConselho);