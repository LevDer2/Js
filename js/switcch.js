// let a = 5;

// if (true){
//     let a = 10;
//     if (true){
//         a = 25;
//         console.log(a);
//     }
// }

// console.log(a);

// 2. Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.

// const stars = Number(prompt("Скільки зірковий готель ви хочете? (1-5)"));
// switch (stars) {
//     case 1:
//         alert("Ціна на готель буде становити 20$");
//         break;
//     case 2:
//         alert("Ціна на готель буде становити 30$");
//         break;
//     case 3:
//     alert("Ціна на готель буде становити 50$");
//         break;
//     case 4:
//     alert("Ціна на готель буде становити 70$");
//         break;
//     case 5:
//     alert("Ціна на готель буде становити 120$");
//         break;
//     default:
//         alert("Токої кількості зірок немає")
        
// }

// 1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:
// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонит менеджер'.

const a = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
const b ='Курєр доставить замовлення завтра з 9:00 до 18:00';
const d = 'Посилка буде відправлена сьогодні';
const c = 'Вам передзвонит менеджер';
const opinion = Number(prompt(`Choose the option where is 1 ${a} 2 ${b} 3 ${d} 4 ${c}`));
switch (opinion) {
    case 1:
        alert(`${a}`)
    break;

    case 2:
        alert(`${b}`)
    break;

    case 3:
        alert(`${d}`)
    break;

    default:
        alert(`${c}`);
}