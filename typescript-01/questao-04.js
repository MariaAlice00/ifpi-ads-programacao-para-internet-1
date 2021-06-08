/* a) Crie uma enum chamada DiasSemana com os valores representando os dias da semana segunda a
domingo;*/
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["um"] = "domingo";
    DiasSemana["dois"] = "segunda";
    DiasSemana["tres"] = "ter\u00E7a";
    DiasSemana["quatro"] = "quarta";
    DiasSemana["cinco"] = "quinta";
    DiasSemana["seis"] = "sexta";
    DiasSemana["sete"] = "s\u00E1bado";
})(DiasSemana || (DiasSemana = {}));
/* b) Crie um namespace com mesmo nome e dentro dele crie uma função chamada isDiaUtil recebe um
parâmetro do tipo DiasSema e retorna false se for um sábado ou domingo e retorna true caso
contrário; */
(function (DiasSemana) {
    function isDiaUtil(dia) {
        if (dia == DiasSemana.um || dia == DiasSemana.sete) {
            return false;
        }
        return true;
    }
    /* c) Escreva também um script que declara uma variável do tipo da enum e que testa a função DiasSemana.isDiaUtil(). */
    var diaA = DiasSemana.um;
    var diaB = DiasSemana.cinco;
    console.log(isDiaUtil(diaA));
    console.log(isDiaUtil(diaB));
})(DiasSemana || (DiasSemana = {}));
