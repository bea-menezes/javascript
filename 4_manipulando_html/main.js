var texto = document.getElementById('textoP');

function alterar(){
    textoPrompt = prompt("Insira o texto!");
    texto.innerHTML = textoPrompt;
}