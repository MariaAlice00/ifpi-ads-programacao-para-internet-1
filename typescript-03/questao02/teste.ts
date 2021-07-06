import { SalarioFinal } from "/.codigo";

namespace Salario {
    const comissaoAna = new SalarioFinal('Ana', 4000);
    comissaoAna.calcularComissao();
    comissaoAna.calcularSalario();
    console.log(comissaoAna.relatorio());

    const comissaoMaria = new SalarioFinal('Maria', 7000);
    comissaoMaria.calcularComissao();
    comissaoMaria.calcularSalario();
    console.log(comissaoMaria.relatorio());

    const comissaoPedro = new SalarioFinal('Pedro', 13000);
    comissaoPedro.calcularComissao();
    comissaoPedro.calcularSalario();
    console.log(comissaoPedro.relatorio());

    const comissaoJoao = new SalarioFinal('João', 35000);
    comissaoJoao.calcularComissao();
    comissaoJoao.calcularSalario();
    console.log(comissaoJoao.relatorio());
}