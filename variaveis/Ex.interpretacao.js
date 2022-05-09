let a = 10
let b = 10

console.log(b) // 10

b = 5
console.log(a, b) // 10 5

let a = 10
let b = 20
c = a // c vale 10
b = c // b vale 10
a = b // a vale 10

console.log(a, b, c) // 10 10 10


let horaTrabalhada = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/horaTrabalhada} por hora`)
