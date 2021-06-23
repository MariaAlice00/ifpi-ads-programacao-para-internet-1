export class Personagem {
    public id: number
    public nome: string
    public energia: number

    constructor(id: number, nome: string, energia: number) {
        this.id = id
        this.nome = nome
        this.energia = energia
    }

    public estaVivo(): boolean {
        if (this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    public defenderAtaque(valor: number): void {
        if (valor > this.energia) {
            this.energia = 0
        } else {
            this.energia -= valor
        }
    }

    public relatorio(): string {
        return `ID: ${this.id}\nNOME: ${this.nome}\nENERGIA: ${this.energia}\nESTÁ VIVO: ${this.estaVivo()}`
    }
}



export class Soldado extends Personagem {
    public forcaAtaque: number

    constructor(id: number, nome: string, energia: number, forcaAtaque: number) {
        super(id, nome, energia)
        this.forcaAtaque = forcaAtaque
    }

    public estaVivo(): boolean {
        if (this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    public atacar(personagem: Personagem) {
        personagem.defenderAtaque(this.forcaAtaque)
    }

    public defenderAtaque(valor: number): void {
        if (valor > this.energia) {
            this.energia = 0
        } else {
            this.energia -= (valor/2)
        }
    }

    public relatorio(): string {
        return `ID: ${this.id}\nNOME: ${this.nome}\nENERGIA: ${this.energia}\nFORÇA DE ATAQUE: ${this.forcaAtaque}\nESTÁ VIVO: ${this.estaVivo()}`
    }
}


export class Cavaleiro extends Soldado {
    constructor(id: number, nome: string, energia: number, forcaAtaque: number) {
        super(id, nome, energia, forcaAtaque)
    }

    public estaVivo(): boolean {
        if (this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    public atacar(personagem: Personagem) {
        personagem.defenderAtaque(this.forcaAtaque * 2)
    }

    public defenderAtaque(valor: number): void {
        if (valor > this.energia) {
            this.energia = 0
        } else {
            this.energia -= (valor/3)
        }
    }

    public relatorio(): string {
        return `ID: ${this.id}\nNOME: ${this.nome}\nENERGIA: ${this.energia}\nFORÇA DE ATAQUE: ${this.forcaAtaque}\nESTÁ VIVO: ${this.estaVivo()}`
    }
}


