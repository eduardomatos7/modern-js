const Character = require("./Character");

class Warrior extends Character{
    constructor(nome, pontosVida, escudo, posicao, ataque, defesa){
        super(nome, pontosVida, ataque, defesa)
        this.escudo = escudo
        this.posicao = posicao

    }
    atacar(alvo){
        if (this.posicao === "atacar"){
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
   
    mudarPosicao(position){
       if (position === "atacar" || position === "defender"){
        this.posicao = position
        console.log(`${this.nome} mudou sua posição para ${this.posicao}.`)
       }else{
        console.log("posição inválida!")
       }
    }
    defender(dano){
        let defesaTotal = this.defesa
        if (this.posicao === "defesa"){
            defesaTotal += this.escudo
        }
        let danoRecebido = Math.max(0, dano - defesaTotal)
        this.pontosVida -= danoRecebido
        console.log(`${this.nome} recebeu ${danoRecebido} de dano após defender.`)
    }
}

module.exports = Warrior