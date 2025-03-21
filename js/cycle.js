// const message = "I love JavaScript";
// // const result = message[message.length - 1];
// // console.log(result);

// for (let i = 0; i < message.length - 1; i += 1){
//     console.log(message[i]);
// };

//напиши скрипт, який підрахує загальну зарплату працівників
// кількість працівників зберігається у зміній emplois
// зарплата кожного працівник, це випадкове число від 500 до 5000
// записати загальну сумму в зміну totalSalary та вивести у консоль.
//

// let totalSalary = 0;
// const emploes = 10;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 0; i <= emploes; i += 1) {
//     const result = Math.round( Math.random() * (maxSalary - minSalary) + minSalary);
//     totalSalary += result;
//     console.log(`Зарплата працівника ${result} якщо вам щось не подобається звертайтеся до компа не до мене`);
    
// }

// console.log(`Загальна сума заробітніх плат всіх працывників ${totalSalary}`);

// const age = Number(prompt("Ваш вік"));
// const allowedAge = 18;
// const password = "qwerty";
// if (age > allowedAge) {
//     const isAdmin = prompt("Ви адмін?");
//     if (isAdmin) {
//         const enterpassword = Number(prompt("Введи пароль або зїм"))

//         if (password === enterpassword)
//             console.log("Вхід дозволено і я вас не зїв");
//     }
//     else {
//         console.log("Вхід дозволено на дзвичайну ст");
        
//     }
// } else {
//     console.log("Вам немає 18 років");
    
// }

// for (let i = 1; i <= 100; i += 1){
//     console.log(i);
// }

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
//     if (i === 8) {
//         console.log(i);
//         break;
//     }
// }

// let sum = 0;
// for (let i = 0; i <= 5; i += 1) {
//     sum += i;
    
// }

// console.log(sum);

// let num = 3;
// for (let i = 0; i <= 10; i += 1) {
//     console.log(`${num} X ${i} = ${num * i}`);
    
// }

// Завдання: Виведи в консоль числа від 1 до 5.

// let i = 0;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(i);
        
//     }

//     i += 1;
// }

// let i = 10;
// while(i >= 1) {
//     console.log(i);
//     i-= 1;
// }

//Завдання: Запитуй у користувача число, поки він не введе більше 10.

// let num = 0;
// while(num <= 10) {
//     num = Number(prompt("Write the number more than 10"));
// }

// console.log(num);

//Завдання: Запитуй у користувача пароль, поки він не введе "1234".

// let password;
// do{
//     password = prompt("Введіть пароль");
// } while (password !== "1234")
//     alert("Пароль вірний")

