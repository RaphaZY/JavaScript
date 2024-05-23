class Calculadora{  
    somar(x, y) {
        return x + y;
    }

    subtrair(x, y) {
    return x - y;
    }

    multiplicar(x, y) {
    return x * y;
    }

    dividir(x, y) {
    if (y <= 0){
        alert("Erro: Divisor é igual ou menor que 0")
     } else {return x / y;}
    }

    exponenciacao(x, y){
        return x ** y;
    }

    raiz(x){
        return Math.sqrt(x);
    }


}