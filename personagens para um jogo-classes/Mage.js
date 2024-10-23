const Character = require("./Character");

class Mage extends Character{
    constructor(nome, pontosVida, ataque, magia, defesa){
        super(nome, pontosVida, ataque, defesa)
        this.magia = magia

    }
    atacar(alvo){
        const dano = (this.ataque + this.magia) - alvo.defesa
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
    aumentarVida(alvo){
        const aumentar_vida = this.magia * 2
        alvo.pontosVida += aumentar_vida
        console.log(`Aumentando os pontos de vida de ${alvo} para ${alvo.pontosVida}`)

    }
}

module.exports = Mage