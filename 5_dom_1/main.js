/*
    ÁRVORE DOM

    PARENTS AND CHILD

    window
    |
    (location, document, history)
                |
                html
                |
                (head, body)
                  |     |
(meta, title, etc.)    (h1, p, div,  etc.)

-   FORMAS DE ACESSAR OS ELEMENTOS DO DOM

- por MARCA{
    Método: getElementsByTagName()
}
- por ID{
    Método: getElementById()
}
- por NOME{
    Método: getElementsByName()
}
- por CLASSE{
     Método: getElementsByClassName()
}
- por SELETOR
    Método: querySelector('div#msg') - usar como o css

*/

// POR MARCA
window.document.write('Olá, Mundo! <br>');
window.document.write(window.document.URL);

var p1 = window.document.getElementsByTagName('p')[0]
window.document.write('<br>' + p1.innerText)
p1.style.color = 'pink';

var corpo = window.document.body; //dando acesso ao body
corpo.style.backgroundColor = 'black';

var p2 = window.document.getElementsByTagName('p')[1]
window.document.write('<br>' + p2.innerHTML);

// POR ID

var d = window.document.getElementById('msg');
d.style.background = 'green';
d.innerText += ' Estou aguardando...'

var f = window.document.getElementById('msg2');
window.document.getElementById('msg2').innerText += ' Olá Mundo';

// POR SELETOR

var seletor = document.querySelector('div.seletor');
seletor.style.background = 'pink';
seletor.style.color = 'black';

