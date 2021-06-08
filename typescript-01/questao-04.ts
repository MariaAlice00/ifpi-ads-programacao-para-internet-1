/* a) Crie uma enum chamada DiasSemana com os valores representando os dias da semana segunda a domingo;*/

enum DiasSemana {
    um = "domingo",
    dois = "segunda",
    tres = "terça",
    quatro = "quarta",
    cinco = "quinta",
    seis = "sexta",
    sete = "sábado"
}

/* b) Crie um namespace com mesmo nome e dentro dele crie uma função chamada isDiaUtil recebe um parâmetro do tipo DiasSema e retorna false se for um sábado ou 
domingo e retorna true caso contrário; */

namespace DiasSemana {
    function isDiaUtil(dia: DiasSemana): boolean {
        if (dia == DiasSemana.um || dia == DiasSemana.sete) {
            return false;
        } 
        return true;
    }

    /* c) Escreva também um script que declara uma variável do tipo da enum e que testa a função DiasSemana.isDiaUtil(). */

    const diaA: DiasSemana = DiasSemana.um;
    const diaB: DiasSemana = DiasSemana.cinco;

    console.log(isDiaUtil(diaA));
    console.log(isDiaUtil(diaB));
}

