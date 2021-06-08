// PI CE MA

enum State { 
    piaui = "PI", 
    ceara = "CE", 
    maranhao = "MA"
}

for (let sigla in State) {
    console.log(State[sigla])
}

/*
PI
CE
MA
*/

//Object.keys(State).map(index => console.log(index))


/* 
piaui
ceara
maranhao
*/