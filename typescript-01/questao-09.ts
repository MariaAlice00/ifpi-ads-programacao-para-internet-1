// Crie uma classe chamada Transacao que tenha:

class Transacao {
    // a) Um atributo chamado valor e um outro chamado desconto, ambos somente leitura;
    readonly valor: number;
    readonly desconto: number;

    constructor(valor: number, desconto: number) {
        this.valor = valor;
        this.desconto = desconto;
    }
    
    // c) Crie métodos de acesso get para ambos os atributos.
    get getValor() {
        return this.valor;
    }
    
    get getDesconto() {
        return this.desconto;
    }
    
    // b) Um método que calcule e retorne o valor do desconto aplicado ao valor original: valor * (1-desconto/100).
    valorComDesconto(): number {
        return this.valor * (1 - this.desconto / 100);
    }
}

// d) Instancie uma classe Transacao e teste seus métodos
const dinheiro = new Transacao(1900, 10);
console.log(dinheiro.getValor);
console.log(dinheiro.getDesconto);
console.log(dinheiro.valorComDesconto());
