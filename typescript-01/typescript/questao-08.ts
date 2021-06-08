class MeuNumero {
    // a) Um atributo chamado numero que seja somente leitura e inicializado no construtor;
    readonly numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    // b) Um método chamado getInteiro que retorna a parte inteira do atributo numero;
    getInteiro(): number {
        return Math.trunc(this.numero);
    }

    // c) Um método chamado getDecimal que retorne a parte decimal do atributo numero. Dica: utilize a função Math.floor(n)
    getDecimal(): number {
        return Number((this.numero - Math.floor(this.numero)).toFixed(2));
    }
}

// d) Instancie uma classe MeuNumero e teste os métodos da classe.
const numUm = new MeuNumero(1.24);
console.log(numUm.getInteiro());
console.log(numUm.getDecimal());


