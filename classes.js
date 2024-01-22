class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque= ataque
    }
    escrever(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let Guerreiro = new heroi("Judas",23,"guerreiro","espada")
Guerreiro.escrever()