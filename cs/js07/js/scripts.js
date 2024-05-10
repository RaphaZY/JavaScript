var MIN_COMPRIMENTO = 50;
var MAX_COMPRIMENTO = 10000;
var INCREMENTO = 10;
var TEMPO = 5000;

var timeout;

function amplia(){
    var div = document.getElementById('barra');
    if (parseInt(div.style.width) < MAX_COMPRIMENTO){
        div.style.width = (parseInt(div.style.width) + INCREMENTO) + 'px';
        if(timeout)
            clearTimeout(timeout);
        timeout = setTimeout(amplia,TEMPO);
    }
}

function reduz(){
    var div = document.getElementById('barra');
    if (parseInt(div.style.width) > MIN_COMPRIMENTO){
        div.style.width = (parseInt(div.style.width) - INCREMENTO) + 'px';
        if(timeout)
            clearTimeout(timeout);
        timeout = setTimeout(reduz,TEMPO);
    }
}

function inicializa(){
    var div = document.getElementById('barra');
    div.onmouseover = amplia;
    div.onmouseout = reduz;
}