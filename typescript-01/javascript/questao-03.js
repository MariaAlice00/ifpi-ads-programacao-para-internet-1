// PI CE MA
var State;
(function (State) {
    State["piaui"] = "PI";
    State["ceara"] = "CE";
    State["maranhao"] = "MA";
})(State || (State = {}));
for (var sigla in State) {
    console.log(State[sigla]);
}
/*
PI
CE
MA
*/
Object.keys(State).map(function (index) { return console.log(index); });
/*
piaui
ceara
maranhao
*/ 
