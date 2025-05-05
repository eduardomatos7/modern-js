class Product{
    constructor(name, description, price, inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock

    }
    addToStock(amount){
        this.inStock += amount
        return `Em estoque: ${this.inStock}`
    }
    //valor inteiro de 0 a 100
    calculateDiscount(percentagem){
        const discount = this.price * ((100 - percentagem)/100)
        return this.price - discount
    }
}
const product = new Product("Eduardo", "Temos de tudo aqui na empresa!", 2000)
product.addToStock(10)
const productWithDiscount = product.calculateDiscount(50)
console.log(productWithDiscount)

