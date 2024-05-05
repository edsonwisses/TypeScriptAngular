// 1 arrays
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
//numbers = "teste" // não funciona pois o valor não é numérico
var nomes = ["Edson", "Fernanda", "Isabela"];
// nomes.push(4) //não funciona pois o valor não é uma string
nomes.push("Paulo");
//2 - outra sintaxe array
var nums = [100, 200];
numbers.push(300);
console.log(nums);
// 3 - any
var arr1 = [1, "teste", true, [], { nome: "Edson" }];
console.log(arr1);
arr1.push([1, 2, 3]);
//4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("a","b")
// 5 - retorno de função
function greeting(name) {
    //return 5 esse return não seria aceito por retornar um valor númerico
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Edson"));
//console.log(greeting(123)) // aqui o compilador avisa que não pode passar um valor numérico
// 6 - função anonima
setTimeout(function () {
    var sallary = 1000;
    /* console.log(parseFloat(sallary)) //não seria permitido pois o parseFloat só funciona em
    strings*/
    console.log(sallary);
}, 2000);
//essa função anonima criada no setTimeout sera executada quando passar 2 segundos
//7 - tipos de objeto
function passcoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
var objcoord = { x: 329, y: 84.2 };
passcoordinates(objcoord);
passcoordinates({ x: 200, y: 30 });
// 8 - props opcionais 
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Paulo", "Cesar"));
console.log(advancedGreeting("Isabela"));
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
// showBalance(true)
var arr2 = [1, "teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("x: ".concat(obj.x, " y: ").concat(obj.y, " z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Edson", age: 51 };
console.log(somePerson);
//type personType = {
//    age: number
//}//daria erro falando que o tipo já existe
// 15 - Literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
//showDirection("top") // a direção top não será aceita pois não foi definida
// 16 - non null assertion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
var n;
//n =  1
n = 1000n; //aqui vai dar erro até alterar o tsconfig.json para 2020
