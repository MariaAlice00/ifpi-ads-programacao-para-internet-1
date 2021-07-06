class SalarioFinal {
    private nome: string;
    private valor_vendas: number;

    constructor(nome: string, valor_vendas: number) {
        this.nome = nome;
        this.valor_vendas = valor_vendas;
    }

    public calcularComissao(): number {
        if (this.valor_vendas <= 5000) {
            return 0;
        }
        else if (this.valor_vendas > 5000 && this.valor_vendas <= 10000) {
            var valor = this.valor_vendas - 5000;
            return valor * 0.05;
        }
        else if (this.valor_vendas > 10000 && this.valor_vendas <= 30000) {
            var valor = this.valor_vendas - 10000;
            return (valor * 0.10) + (0.05 * 5000);
        }
        else if (this.valor_vendas > 30000) {
            return this.valor_vendas * 0.20;
        }
    }

    public calcularSalario(): number {
        const salario = 1100;

        return this.calcularComissao() + salario;
    }

    public relatorio(): string {
        return `Nome: ${this.nome}\nComissão: R$${this.calcularComissao()}\nSalário: R$${this.calcularSalario()}\n`;
    }
}

