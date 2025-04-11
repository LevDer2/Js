// // function name(a, b) {
// //     return a + b;
// // }
// // const name = function(a,b) {
// //     return a + b;
// // }
// // console.log(name(10,5));
// const opperations = function(callback, a,b) {
//     return callback(a,b)
// }
// const fnAdd = function (a,b) {
//     return `Результат додавання числа ${a} + ${b} = ${a + b}`;
// }
// const fnMinus = function (a,b) {
//     return `Результат минусовання числа ${a} - ${b} = ${a - b}`;
// }
// const fnMultiply = function (a,b) {
//     return `Результат множання числа ${a} * ${b} = ${a * b}`;
// }
// const fnDivision = function (a,b) {
//     return `Результат дылення числа ${a} : ${b} = ${a / b}`;
// }
// console.log(opperations(fnAdd, 2, 2));
// console.log(opperations(fnMinus, 2, 2));
// console.log(opperations(fnDivision, 2, 2));
// console.log(opperations(fnMultiply, 2, 2));

// const tel = ["06837347364", "06837342364", "06832467364", "0683734736423"];

// const newmassiv = [1, 3, 4, 6, 4, 13, 15, 45];

// const operation = function (callback, array) {
//     return callback(array);
// }

// const editMassiv = function (array) {
//     let message = ""
//     for (let i = 0; i <= array.length; i += 1){
        
//         if (array[i] > 11) {
//             message = `Знайшли невірний номер телефону ${array[i]}`;
            
//         }
        
//     }
//     return message
// }
// console.log(operation(editMassiv, tel));


// const sumMassiv = function (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         // console.log(array[i]);
//         sum += array[i];
//     }
    
//     return sum
// }

// console.log(operation(sumMassiv, newmassiv));
// console.log(arr(1,2));
// function arr (a, b) {
//     return a + b;
// }

// console.log(arr(1,2));

// const arr = function (a, b) {
//     return a + b;
// }
// console.log(arr(1,2));

// const add = (a,b) => {
//     const result = a + b;
//     return result;
// }
// console.log(add(2,1));

// const add = (a,b) => a+b 
// console.log(add(2, 2));

// const arr = message => message;
// console.log(arr("hello"));


// const message = function () {
//     console.log(arguments);
//     const array = Array.from(arguments);
//     console.log(array);
// }

// console.log(message("hi","hello"));

// const result = (...args) => args;
// console.log(result("qwe", "rty"));

// стек викликів
// function greet() {
//   console.log("Привіт!");
//   askName();
// }

// function askName() {
//   console.log("Як тебе звати?");
//   sayBye();
// }

// function sayBye() {
//   console.log("Бувай!");
// }

// greet();

// frontend-mentor frontend-mentor
// 20:41
// Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”.

// const hello1 = (a) => a; 
// console.log(hello1('Привіт JavaScript'));

// Напишіть стрілкову функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).

// const hello2 = (name) => `Hello, ${name}`;
// console.log(hello2("Mukola"));

// Напишіть стрілкову функцію mul(n, m), яка приймає два аргументи і повертає *, + і minus цих аргументів. Перевірте її роботу.

// const mul = (n,m) => `Добуток = ${n*m}`;
// console.log(mul(10,5));

// Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих аргументів у консоль.
// Для перевірки:

const myNewArrowFunction = (...rest) => rest

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"));
