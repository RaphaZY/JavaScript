var contador = 0;
var bt = document.getElementById('btCont');
var btl = document.getElementById('btLimpa')

bt.onclick=()=>{
    contador++;
    //cria o elemento el referente ao span
    var el = document.getElementById('cont');
    //atualiza o conteudo
    el.innerHTML = contador; 
}

btl.onclick=()=>{
    contador--;
    //cria o elemento el referente ao span
    var el = document.getElementById('cont');
    //atualiza o conteudo
    el.innerHTML = contador; 
}


