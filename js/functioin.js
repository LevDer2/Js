// function aff() {
//     console.log("Hello");
//     return
// }

// aff()

// function userPerson(name, age) {
//     const message = `My name is ${name} and age ${age}`;
//     console.log(message);
//     return message
// }
// userPerson("Lev", "12")

// const test = function(a, b, c) {
//     return a + b + c;
// };

// const res = test(1, 2, 3);
// console.log(res);
// console.log(test(2,5,10));

// function addNumbers(a = 5, b = 10) { // a та б це параметри функції


//     return a + b
// }
// console.log(addNumbers(20, 30)); // аргументи

// function multiply() {
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i ++) {
//         console.log(arguments[i]);
        
//     }
//     return arguments
// }
// console.log(multiply(5, 3, 12));

// const array = [4, 6, 7, 8, 9]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// function a() {
//     console.log(arguments);
//     const array = Array.from(arguments)
//     console.log(array);
    
//     let sum = 1;
//     for (let i = 0; i < arguments.length; i += 1) {
//         sum *= arguments[i]
//     }
//     return sum
// }
// console.log(a(5, 3, 12, 13, 200));
// console.log(a(2, 3, 4, 5, 6, 7, 88, 99));


//Напиши функцію яка повертає найбільше число в масиві:
//  У цій функції ми проходимо по масиву чисел та знаходимо найбільше число. Його повертаємо як результат функції.

function findMaxNumber(array) {
let sum = array[0];
console.log(sum);

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    if (sum < array[i]) {
        sum = array[i]
    }
}
return sum;
}
console.log(findMaxNumber([1, 3, 2, 5, 4])); // 5