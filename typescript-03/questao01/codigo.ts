export class CalcularVariacao {
    private media_casos_14_dias: number;
    private media_casos_hoje: number;

    constructor(media_casos_14_dias: number, media_casos_hoje: number) {
        this.media_casos_14_dias = media_casos_14_dias;
        this.media_casos_hoje = media_casos_hoje;
    }

    public variacao(): number {
        return ((this.media_casos_hoje / this.media_casos_14_dias) - 1) * 100;

    }

    public classificacao(): string {
        let valor_variacao: number = this.variacao();

        if (valor_variacao == 15) {
            return 'Em estabilidade';
        } 
        else if (valor_variacao < 15) {
            return 'Em queda'
        }
        else {
            return 'Em alta';
        }
    }
}

