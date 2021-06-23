import { Cavaleiro, Personagem, Soldado } from "./personagem/Personagens.js";


export default class Jogo {
    personagens: Personagem[] = []

    public incluir(pessoa: Personagem): void {
        var personagemIgual = this.personagens.filter(personagem => personagem.id === pessoa.id)

        if (personagemIgual.length > 0) {
            console.log('ID já existe.')
            return
        } else {
            this.personagens.push(pessoa)
        }
    }

    public consultar(valor: number): Personagem {
        var personagem = this.personagens.filter(personagem => personagem.id === valor)

        if (personagem.length > 0) {
            return personagem[0]
        } else {
            return null
        }
    }

    public atacar(idUm: number, idDois: number) {
        if (idUm === idDois) {
            console.log('O mesmo personagem, cuidado!')
            return
        }

        var atacante = this.consultar(idUm)
        var atacado = this.consultar(idDois)

        if (atacante && atacado) {
            if (atacante instanceof Soldado || atacante instanceof Cavaleiro) {
                atacante.atacar(atacado)
                return
            }
        }
    }

    public avaliarBatalha(): void {
        return this.personagens.forEach(personagem => console.log(personagem.toString()))
    }
}


