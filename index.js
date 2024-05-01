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
