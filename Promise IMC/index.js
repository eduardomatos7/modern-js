async function calcularIMC(peso, altura){
    if (typeof peso !== 'number' || typeof altura !== 'number'){
        return Promise.reject("Erro! Informe um número inteiro")
    }
    return peso / (altura * altura)
        
}
async function init(peso, altura){
    try{
        const resultIMC = await calcularIMC(peso, altura)
        console.log(`O resultado do IMC foi de ${resultIMC.toFixed(2)}`)
        if (resultIMC < 18.5){
        console.log('Situação: Magreza')

        }else if (resultIMC >= 18.5 && resultIMC <= 24.9){
            console.log("Situação: Normal")

        }else if(resultIMC >= 25 && resultIMC <= 29.9){
            console.log("Situação: Sobrepeso")
        }else if(resultIMC >= 30 && resultIMC <= 39.9){
            console.log("Situação: Obesidade")
        }else{
            console.log("Situação: Obesidade grave")
        }
        }catch(err){
            console.log(err)
        }
        
    }
    console.log("Resolvendo IMC")    
        
init(77, 1.77)
init(83, 1.80)
init(50, 1.85)

