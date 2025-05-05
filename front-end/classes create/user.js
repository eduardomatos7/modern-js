class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password

    }
    login(email, password){
        if (this.email === email && this.password === password){
            console.log("Login bem sucedido!")
        }else{
            console.log("As senhas não conferem!")
        }

    }
}
const fullname = "Eduardo Matos Silva"
const email = "eduardo_matos@gmail.com"
const password = "2093msnjo"
const user = new User(fullname, email, password)
user.login("eduardo_matos@gmail.com", "2093msnjo")
