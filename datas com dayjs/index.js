const dayjs = require("dayjs")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

function aniversario(string){
    const datePessoa = dayjs(string)
    const dateNow = dayjs()
    const idade = dateNow.diff(datePessoa, 'year')
    const proximaData = dayjs(string).add(idade + 1, 'year')
    const faltamX = proximaData.diff(dateNow, 'days')
    console.log(`A idade atual é ${idade} anos. A próxima data é ${proximaData.format('DD/MM/YYYY')} e faltam ${faltamX} dias para o seu aniversario`)
    string = dayjs(string).add(1, "year")
    const ola = dayjs().endOf('year')

}
aniversario('2003-06-18')