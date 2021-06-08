var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    // b) Um método chamado getInteiro que retorna a parte inteira do atributo numero;
    MeuNumero.prototype.getInteiro = function () {
        return Math.trunc(this.numero);
    };
    // c) Um método chamado getDecimal que retorne a parte decimal do atributo numero. Dica: utilize a função Math.floor(n)
    MeuNumero.prototype.getDecimal = function () {
        return Number((this.numero - Math.floor(this.numero)).toFixed(2));
    };
    return MeuNumero;
}());
var numUm = new MeuNumero(1.24);
console.log(numUm.getInteiro());
console.log(numUm.getDecimal());
