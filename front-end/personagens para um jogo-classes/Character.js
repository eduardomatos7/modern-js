class Character{
    constructor(nome, pontosVida, ataque, defesa){
        this.nome = nome
        this.pontosVida = pontosVida
        this.ataque = ataque
        this.defesa = defesa
    }
    atacar(alvo){
        const dano = this.ataque - alvo.defesa
        if (dano > 0){
            alvo.pontosVida -= dano
            console.log(`${this.nome} causou ${dano} de dano no ${alvo.nome}`)
        }else{
            alvo.defesa -= dano
            console.log(`A defesa de ${alvo.nome} é mais alta que o ataque`)
        }

        if (alvo.pontosVida <= 0){
            console.log(`${alvo.nome} foi derrotado`)

        }else{
            console.log(`${alvo.nome} agora tem ${alvo.pontosVida} pontos de vida`)
        }


    }
}
module.exports = Character