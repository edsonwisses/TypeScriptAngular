//1 - number
let x: number = 10
console.log(x)
x = 16
console.log(typeof x)
const y:number = 15.5884848
console.log(typeof y)
console.log(y.toPrecision(3))

//2- string

const firstName: string = "Edson"
console.log(firstName.toUpperCase())
let fullName: string
const lastName:string = "Wisses"
fullName = firstName+" "+lastName
console.log(fullName)
console.log(typeof fullName)

//3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(a)

//4 - inferencie e annotation

let ann: string = "Teste" //aqui o tipo foi definido por annotation
let inf = "Teste" // aqui o tipo foi definido por inference
//repare que ele não aceita valores que não sejam string
ann = 1
inf = 1

