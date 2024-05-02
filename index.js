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
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
