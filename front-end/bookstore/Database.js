module.exports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }
    find(key){
        return this.#storage[key]
    }
    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }
    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if (!bookExists){
            this.#storage.books.push(book)
        }
    }
    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)

    }
    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }


    findPosterByName(posterName){
        return this.#storage.posters.find(b => b.name === posterName)
    }
    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists){
            this.#storage.posters.push(poster)
        }
    }
    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)

    }
    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists){
            this.#storage.users.push(user)
        }
    }
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.showStorage.authors)
        console.table(this.showStorage.books)
        console.table(this.showStorage.posters)
        console.table(this.showStorage.users)
        console.table(this.showStorage.orders.map(order => order.data))
    }
}