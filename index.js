function media(...element){
    const mediaSimples = element.reduce((acc, soma) => acc + soma, 0)
    return `A média aritmética simples é: ${mediaSimples / element.length}`
}
function mediaPonderada(...element){
    const sum = element.reduce((acc, {num, weight}) => acc + (num * (weight ?? 1)), 0)
    const weightsum = element.reduce((acc, {weight}) => acc + weight, 0)
    return ` A média ponderada é: ${sum / weightsum}`

}
function mediana(...elements){
    const numbersOrdered = elements.sort((a, b) => a - b)
    if (numbersOrdered.length % 2 === 0){
        const numberLeft = numbersOrdered[numbersOrdered.length / 2 - 1]
        const numberRight = numbersOrdered[numbersOrdered.length / 2]
        return `A mediana é: ${(numberLeft + numberRight) / 2}`
    }else{
        return `A mediana é: ${numbersOrdered[(numbersOrdered.length - 1)/ 2]}`
    }
}

function moda(...numbers){
    const quantities = numbers.map(num => [num, numbers.filter(n => num === n).length])
    quantities.sort((a, b) => b[1] - a[1])
    return `Moda: ${quantities[0][0]}`
  }
  
console.log(media(10, 20, 30))
console.log(mediaPonderada({num: 2, weight: 7}, {num: 5, weight: 5}))
console.log(mediana(1, 33, 4, 2, 1, 5, 6))
console.log(moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))

