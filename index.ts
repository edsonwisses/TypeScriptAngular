// 1 arrays
let numbers: number[] = [1, 2, 3]

numbers.push(4)

console.log(numbers[2])

//numbers = "teste" // não funciona pois o valor não é numérico

const nomes: string[] = ["Edson", "Fernanda","Isabela"]

// nomes.push(4) //não funciona pois o valor não é uma string

nomes.push("Paulo")

//2 - outra sintaxe array
const nums: Array<number> = [100, 200]

numbers.push(300)

console.log(nums)

// 3 - any

const arr1: any = [1, "teste", true, [], {nome:"Edson"}]

console.log(arr1)

arr1.push([1,2,3])

//4 - parametros tipados

function soma(a: number, b:number){
    console.log(a+b)
}
soma(4, 5)
//soma("a","b")

// 5 - retorno de função

function greeting(name:string):string{
    //return 5 esse return não seria aceito por retornar um valor númerico
    return `Olá ${name}`
}

console.log(greeting("Edson"))
//console.log(greeting(123)) // aqui o compilador avisa que não pode passar um valor numérico

// 6 - função anonima

setTimeout(function(){
    const sallary: number = 1000

    /* console.log(parseFloat(sallary)) //não seria permitido pois o parseFloat só funciona em 
    strings*/
    console.log(sallary)
}, 2000)
//essa função anonima criada no setTimeout sera executada quando passar 2 segundos

//7 - tipos de objeto
function passcoordinates(coord: {x: number, y: number}){
    console.log("x coordinates: "+coord.x)
    console.log("y coordinates: "+coord.y)
}

const objcoord = {x:329, y:84.2}
passcoordinates(objcoord)
passcoordinates({x:200, y:30})

// 8 - props opcionais 
function showNumbers(a:number, b:number, c?:number){
    console.log("A:"+a)
    console.log("B:"+b)
    if(c){
        console.log("C:"+c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4,5)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?:string){
    if(lastName!== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá ${firstName}, tudo bem?`
} 
console.log(advancedGreeting("Paulo","Cesar"))
console.log(advancedGreeting("Isabela"))

// 10 - union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("500")
// showBalance(true)
const arr2: Array<number| string| boolean> = [1, "teste", true]

// 11 - avançando em union types
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "usuário não aprovado!"
    }
    return `A função do usuário é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//12 - type alias
type ID = string|number
function showId(id: ID){
    console.log(`O ID é: ${id}`)
}
showId(1)
showId("200")

// 13 - interfaces
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj : Point){
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}
const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}
showCoords(coordObj)

//14 interface x type alias
interface Person{
    name:string
}
interface Person {
    age:number
}
const somePerson: Person = {name: "Edson", age: 51}
console.log(somePerson)
type personType = {
    name:string
}

//type personType = {
//    age: number
//}//daria erro falando que o tipo já existe

// 15 - Literal types
let test: "testando"
test = "testando"
console.log(test)

function showDirection(direction:"left" | "right" | "center"){
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

//showDirection("top") // a direção top não será aceita pois não foi definida

// 16 - non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

 // 17 - bigint
  let n: bigint
  //n =  1
  n = 1000n //aqui vai dar erro até alterar o tsconfig.json para 2020
  console.log(n)
  console.log(typeof n)
  console.log(n + 100n)
  