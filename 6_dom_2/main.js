// DOM - Document Object Model

/*
    Eventos de mouse
    - mouseenter
    - mousemove
    - mousedown
    - mouseup
    - click
    - mouseout

    Eventos disparados por função

    sintaxe:

    function ação(parametros) {

    }
*/

// 1º FORMA DE DISPARAR UM EVENTO
var area = document.getElementById('area');

function clicar(){
    area.innerText = 'Cliclou!'; 
    area.style.background = 'purple'
}

function entrar(){
    area.innerText = 'Entrou!'; 
}

function sair(){
    area.innerText = 'Saiuu!'; 
    area.style.background = 'rgb(128, 79, 206)'
}

// 2º FORMA DE DISPARAR UM EVENTO
var area2 = document.getElementById('area2');
area2.addEventListener('click', clicar2);
area2.addEventListener('mouseenter', entrar2);
area2.addEventListener('mouseout', sair2);

function clicar2(){
    area2.innerText = 'Cliclou Aqui!';
}

function entrar2(){
    area2.innerText = 'Entrou Aqui!';
}

function sair2(){
    area2.innerText = 'Saiuu Daqui!';
}

