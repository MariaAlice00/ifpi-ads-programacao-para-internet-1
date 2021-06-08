// Crie uma classe chamada Transacao que tenha:
var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Object.defineProperty(Transacao.prototype, "getValor", {
        // c) Crie métodos de acesso get para ambos os atributos.
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transacao.prototype, "getDesconto", {
        get: function () {
            return this.desconto;
        },
        enumerable: false,
        configurable: true
    });
    // b) Um método que calcule e retorne o valor do desconto aplicado ao valor original: valor * (1-desconto/100).
    Transacao.prototype.valorComDesconto = function () {
        return this.valor * (1 - this.desconto / 100);
    };
    return Transacao;
}());
var dinheiro = new Transacao(1900, 10);
console.log(dinheiro.getValor);
console.log(dinheiro.getDesconto);
console.log(dinheiro.valorComDesconto());
