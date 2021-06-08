/* Crie uma função chamada exibir receba como parâmetro um “rest parameter” representando strings. A função deve exibir no log cada um dos elementos do “rest parameter”. Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
    >>> exibir(“a”, “b”);
    >>> exibir(“a”, “b”, “c”);
    >>> exibir(“a”, “b”, “c”, “d”); */
function exibir() {
    var parameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameter[_i] = arguments[_i];
    }
    var i = 0;
    while (i < parameter.length) {
        console.log(parameter[i]);
        i++;
    }
    console.log();
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
