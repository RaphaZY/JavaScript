function somar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var somar = parseInt(num1) + parseInt(num2);
    teste(num1, num2, somar);
}

function subtrair(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sub = parseInt(num1) - parseInt(num2);
    teste(num1, num2, sub);
}

function multiplicar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var mult = parseInt(num1) * parseInt(num2);
    teste(num1, num2, mult);
}

function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var div = parseInt(num1) / parseInt(num2);
    teste(num1, num2, div);
}

function limpar(){
    var num1 = null;
    document.getElementById('num1').value = num1;
    var num2 = null;
    document.getElementById('num2').value = num2;
    var zero = null;
    document.getElementById('resultado').innerHTML = zero;
}

function teste(num1, num2, resultado){
    if (isNaN(num1) || (num1 == "")){
        alert("Valor inválido para o número 1");
        document.getElementById('num1').select();
    } else if (isNaN(num2) || (num2 == "")){
        alert("Valor inválido para o número 2");
        document.getElementById('num2').select();
    } else {
    document.getElementById('resultado').innerHTML = resultado;
    }
}