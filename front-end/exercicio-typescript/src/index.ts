let spaceships = []
let condition = true

function nave(name: string, pilot: string, crewLimit: number){
    const spaceship = {
        name,
        pilot, 
        crewLimit,
        crew: [],
        inMission: false
    }
    if(confirm(
        `Tem certeza que deseja adicionar essa nave?
        Nome: ${name} 
        Piloto: ${pilot}    
        Limite de passageiros: ${crewLimit}    
        `)){
            alert("Nave adicionada com sucesso!")
    spaceships.push(spaceship)
    return spaceship
    
}}

function addMember(spaceship: { name?: any; pilot?: any; crewLimit: any; crew: any; inMission?: boolean }){
    const nameMember = prompt("Digite o nome do tripulante")
    const ageMember = Number(prompt(("Digite a idade do tripulante")))
    const member = [nameMember, ageMember]

    if (spaceship.crew.length < spaceship.crewLimit ){
        if(confirm(
            `Tem certeza que deseja adicionar esse tripulante?
            Nome: ${nameMember} 
            Idade: ${ageMember}        
            `)){
                alert("Tripulante adicionado com sucesso!")
                spaceship.crew.push(member)
            }
    }else{ 
        alert("Tripulação máxima atingida!")
    }
    
}

function sendSpaceship(spaceshipSended){
    const spaceship = spaceships.find(element => element.name === spaceshipSended)
    const amount = Math.floor(spaceship.crewLimit / 3)
    if (spaceship){
        
        if (spaceship.crew.length < amount){
            alert("Quantidade de tripulantes insuficiente para missão")
        }else{
            alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.pilot} foi enviada em uma missão.`)
            spaceship.inMission = true
        }
    }else{
        alert("Não existe essa nave")
    }
    
}
function listSpaceships(){
    if (spaceships.length > 0){
        let listnaves = 'Naves registradas:\n'
        spaceships.forEach(element => {
         listnaves += `
            Nome da nave: ${element.name}
            Piloto: ${element.pilot}
            Limite de passageiros: ${element.crewLimit}
            Em missão: ${element.inMission ? 'Sim' : 'Não'}
            Passageiros: ${element.crew.length}
            `

            if (element.crew.length > 0){
                element.crew.forEach((crew: any[]) => {
                    listnaves += `
                    - ${crew[0]}\n
                    `
                })}
            
        });
        alert(listnaves)
    }else{
        alert("Nenhuma nave para mostrar")
    }
   
}

function main(){
    while (condition){
        const input = prompt(
            `Escolha uma opção abaixo:
            1. Criar nova nave
            2. Adicionar membros a uma nave
            3. Mandar nave para missão
            4. Listar todas as naves
            5. Sair`)
        
        switch (input) {
            case "1":
                const name = prompt("Insira o nome da nave")
                const pilot = prompt("Insira o nome do piloto")
                const crewLimit = Number(prompt("Quantidade limite de passageiros: "))
                nave(name, pilot, crewLimit)
                break
            case "2":
                const spaceshipName = prompt("Qual o nome da nave que deseja enviar adicionar o membro?")
                const spaceshipForMember = spaceships.find(s => s.name === spaceshipName)
                try {
                    if (spaceshipForMember){
                    addMember(spaceshipForMember)
                    }else{
                        alert("Não existe essa nave")
                    }
                } catch (error) {
                    console.log(error)
                }
                
                break
            case "3":
                const spaceshipSended = prompt("Qual o nome da nave que deseja enviar para missão?")
                try {
                    sendSpaceship(spaceshipSended)
                    }catch (error) {
                    console.log("Nenhuma nave para ser enviada", error)
                }

                break

            case "4":
                listSpaceships()
                break

            case "5":
                condition = false
                break;
        
            default:
                alert("Selecione uma opção válida!")
                break;
        }
    }
}
main()

