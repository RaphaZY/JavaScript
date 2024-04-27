//função relacionada ao ID
x = 1
function mostrarParagrafo(){
    document.getElementById('p1').style.visibility = 'visible';
}


//função de relacionar ao TagName
function alteraConteudo(){
    document.getElementsByTagName("p")[2].innerHTML = "Texto Modificado pelo JavaScript";
}

// função relacionada ao nome
function alteraBotao(){
    var x = document.getElementsByName('btRed');
    alert('Existe(m) ' + x.length + ' elemento(s) <btRed> nesta página');
    document.getElementsByName('btRed')[0].style.backgroundColor = 'red';
}

//função reacionada á classe
function alteraCor(){
    var y = document.getElementsByClassName('divAltera');
    var i;
    for(i = 0;i < y.length; i++){
        y[i].style.backgroundColor = 'darkmagenta';
    }
}