// 6 значень які завжди призводять до false

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(false));

// Good Luck

// console.log(11 && "abc");
// console.log(0 & 11);
// console.log(113 && null);
// console.log("Мені є 18 років" && "У мене є закордоний паспорт" && "Я можу виъхати за кордон");
// console.log("Мені є 18 років" && Nan && "Я можу виъхати за кордон");


//Логічний оператор or позначається оператором || і повертає перше true яке воно і зустрічає воно його і повертає повертає false якщо не зустріло true
// console.log(0 || 15);
// console.log(15 || 0);
// console.log(1223 || false || "" || undefined || null || "Yes");

// console.log(0 || 20 &&  !NaN);
// console.log(NaN || "ashha" && false || "" || 0 || "hi");

// const message = " QwErEy ";
// console.log(message.length);
// console.log(message.toLowerCase());
// console.log(message.trim());
// console.log(message.trim().toLowerCase());

// Task 2

// // Напиши скрипт який перевіряє можливість розпочати чат з користувачем. Для цього користувач має бути:
// // другом
// // онлайн
// // без режиму не турбувати

const isOnline = false;
const isFriend = true;
const isDisturb = false;
console.log(`${!isOnline && !isFriend && !isDisturb}`);
