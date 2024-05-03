// 01 - função insere item no final
function insereItemFinal(){
    //cria novo objeto item a ser inserido
    var novo = document.createElement('li');
    //cria objeto com itens da lista
    var els = document.getElementsByTagName('ul');
    //cria novo item após o elemento[0]
    els[0].appendChild(novo);
    //insere conteúdo no novo elementos
    novo.innerHTML = "Binômio de newton";
}

// 02 - função insere item antes de ...
function insereItemBefore(){
    //cria novo objeto - item a ser inserido
    var item = document.createElement('li');
    //insere conteúdo no Item
    item.innerHTML = "Binômio de newton";
    //Cria objeto com itens da lista
    var lista = document.getElementById('mat');
    //insere o item antes da posição definida
    lista.insertBefore(item, lista.childNodes[2]);   
}


// 03 - Substitui item especifico
function substituiItem(){
    var lista = document.getElementById('mat');
    //cria novo objeto com os itens da lista
    var els = lista.getElementsByTagName('li');
    //define o numero de itens 
    var tamanho = els.length - 1;
    //define a posição para a substituição
    var pos = prompt('Informe a posição do item a ser substituído [0 a ' + tamanho + ']');
    //substitui o conteúdo do elemento escolhido
    els[pos].innerHTML = prompt('Informe a matéria');   
}

// 04 - exclui item especifico
function excluiItem(){
    //cria novo objeto com lista de Matematica
    var lista = document.getElementById('mat');
    //define o numero de itens 
    var els = document.getElementsByTagName('li');
    //remove o rpimeiro elemento da lista
    lista.removeChild(els[0]);  
}

// 05 - exclui item especifico de Portugues
function excluiPortugues(){
    //cria novo objeto com lista de Portugues
    var listap = document.getElementById('port');
    //define o numero de itens 
    var elsp = listap.getElementsByTagName('li');
    //remove o rpimeiro elemento da lista
    listap.removeChild(elsp[0]);  
}

// 06 - exclui item especifico de Geografia
function excluiGeografia(){
    //cria novo objeto com lista de Geografia
    var listag = document.getElementById('geo');
    //define o numero de itens 
    var elsg = listag.getElementsByTagName('li');
    //remove o rpimeiro elemento da lista
    listag.removeChild(elsg[0]);  
}

// 07 - insere imagem na pagina
function insereImagem(){
    //cria novo objeto Imagem
    var img = document.createElement('img');
    var text = document.createElement('h2');
    //insere o caminho da imagem
    //no objeto img
    img.src = './img/rio.jpg';
    text = 'Rio de Janeiro';
    //remove o rpimeiro elemento da lista
    imagem.appendChild(img); 
 
}