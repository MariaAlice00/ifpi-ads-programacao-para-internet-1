import { CalcularVariacao } from "/.codigo";

namespace Variacao {
    const valor = new CalcularVariacao(5, 50);

    console.log(valor.variacao());
    console.log(valor.classificacao());}
