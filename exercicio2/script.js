const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const array1= [22,03,97,14,05]
const array2= ["gol","celta","ka","uno","fusca"]
const array3=[22, "fusca",12,true,"jeep"]

console.log(` lista de array 01(numeros): ${array1} 
lista de array 02(string): ${array2} 
lista de array 03(mix string-number-booleano): ${array3}`)

console.log("quantidade de itens do array 01:",array1.length)
console.log( "quantidade de itens do array 02:",array2.length)
console.log("quantidade de itens do array 03:",array3.length)

console.log("primeira lista:",array1[0],"segunda lista:",array2[1],"terceira lista:",array3[2])

console.log("checagem de booleano primeira lista:",array1.includes(22))
console.log("checagem da booleano terceira lista:",array3.includes(14))