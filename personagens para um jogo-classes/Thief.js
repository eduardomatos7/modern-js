const Character = require("./Character");

class Thief extends Character{
    constructor(nome, pontosVida, ataque, defesa){
        super(nome, pontosVida, ataque, defesa)
    }
    atacar(alvo){
        let dano = this.ataque - alvo.defesa
        dano = dano * 2
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

module.exports = Thief