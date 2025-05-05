const Character = require("./Character");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const pers1 = new Character('Puda', 1000, 60, 100)
const pers2 = new Character('Luno', 100, 30, 60)
const pers3 = new Thief('zeca', 100, 100, 100)
const pers4 = new Warrior('chefao', 1000, 300, 'defesa', 300, 300)
console.table({pers1, pers2, pers3, pers4})
pers1.atacar(pers2)
pers3.atacar(pers2)
pers3.atacar(pers4)
pers4.defender(300)
console.log(pers1, pers2, pers3, pers4)
console.table({pers1, pers2, pers3, pers4})