//Declarando Váriaveis
let saldoVitoria= calculo (50 , 20)
let nivel=1
//Criando função com retorno
function calculo (vitorias,derrotas){
    let resultado= vitorias-derrotas
    return resultado
}
//Estrutura de Decisão com resultado da retorno da função calculo
if (saldoVitoria<=10) {
    nivel="ferro"
}
else if (saldoVitoria<=20){
    nivel="bronze"
}
else if (saldoVitoria<=50){
    nivel="prata"
}
else if (saldoVitoria<=80){
    nivel="ouro"
}
else if (saldoVitoria<=90){
    nivel="diamante"
}
else if (saldoVitoria<=100){
    nivel="lendário"
}
else if (saldoVitoria>=101){
    nivel="imortal"
}
console.log ("O jogador Nobru Apelao tem o saldo de vitorias "+ saldoVitoria, "e está no nível "+nivel)