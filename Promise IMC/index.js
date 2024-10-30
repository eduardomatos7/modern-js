function calcularIMC(peso, altura){
    return new Promise((resolve, reject)=>{
        if ((typeof(peso) || typeof(altura)) !== 'number'){
            reject("Erro! Informe um número inteiro")
        }else{
            resolve(peso / (altura * altura))
        }
    })
}
function init(peso, altura){
    calcularIMC(peso, altura).then((imcValue)=>{
        console.log(`O resultado do IMC foi de ${imcValue.toFixed(2)}`)
        if (imcValue < 18.5){
        console.log('Situação: Magreza')

    }else if (imcValue >= 18.5 && imcValue <= 24.9){
        console.log("Situação: Normal")

    }else if(imcValue >= 25 && imcValue <= 29.9){
        console.log("Situação: Sobrepeso")
    }else if(imcValue >= 30 && imcValue <= 39.9){
        console.log("Situação: Obesidade")
    }else{
        console.log("Situação: Obesidade grave")
    }
    }).catch((error)=>{
        console.log(error)
    })
    console.log("Resolvendo IMC")
}
init(77, 1.78)