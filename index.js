//Declando Váriaveis
let heroi= "Rimuru"
let xp=10000

//Criando estrutura de decisão com operadores relacionais
if (xp<=1000){
    xp="ferro"
}
else if (xp<=2000){
    xp="bronze"
}
else if (xp<=5000){
    xp="prata"
}
else if (xp<=7000){
    xp="ouro"
}
else if (xp<=8000){
    xp="platina"
}
else if (xp<=9000){
    xp="ascendente"
}
else if (xp<=10000){
    xp="imortal"
}
else if(xp>=10001){
    xp="radiante"
}

//saida de dados
console.log("o Heroi "+ heroi , "está no nivel "+ xp)