var serie = "Friends";

{
    var serie = "Game of Thrones"
    console.log(serie)
}
console.log(serie)

/* mesmo chamando a função dentro e fora do bloco, ambos irão imprimir
Game of Thrones porque ele entende como a ultima atribuição dada a variável */

O LET TEM COMO PROPOSTA SOLUCIONAR OS POSSÍVEIS BUGS CAUSADOS PELO VarDate

let serie = "Friends";

{
    let serie = "Game of Thrones"
    console.log(serie)
}
console.log(serie)

/* Dentro do bloco: Game of Thrones FORA DO BLOCO> Friends. Ou seja, o valor da variável não é sobreposto. */