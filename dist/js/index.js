"use strict";
// string , number, boolean
let x = 10;
x = 12;
console.log(x);
// inferencia x anotation
let y = 12;
// y = 'teste'
let z = 12;
// tipos básicos
let firstName = 'FIlipe';
let age = 22;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = 'João';
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase());
myNumbers.push(5);
// tuplas
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
//object literals -> {prop: value}
const user = {
    name: 'Pedro', age: 18,
};
console.log(user);
console.log(user.name);
user.name = 'Filipao';
console.log(user);
// any 
let a = 0;
a = 'teste';
a = true;
a = [];
// union type
let id = '10';
id = 200;
const userId = 10;
const productId = '00001';
const shirId = 123;
//enum 
//tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: 'Camisa gola V',
    size: Size.G,
};
console.log(camisa);
//literal types
let teste;
//teste = 'outrovalor'
teste = 'algumvalor';
teste = null;
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
//console.log(sum(true, '12.6'))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Matheus'));
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting('José');
greeting('Filipe', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log(`Não foi passado um Número`);
}
doSomething(5);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
