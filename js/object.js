// const user = {
//     name: "Mykola",
//     age: 17,
//     height: 169,
// }
// console.log((user.name));
// console.log(user["age"]);
// user.veyt = 63
// console.log(user);
// // delete user.age
// // console.log(user);
// user.location = {
//     city: "Львів",
//     strit: "Центральна",
//     home: 58,
// }
// console.log(user);
// console.log(user.name);

// Присвоїти змінній apartment об'єкт, який описує квартиру з
// наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr - опис, значення "Spacious apartment in the city center";
//rating - рейтинг, значення 4;
//price - ціна, значення 2153;
//tags - метаінформація, масив ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }
// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// // з інформацією про власника.Додай йому наступні властивості:
// //name - ім'я власника, значення "Henry";
// //phone - телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.co

// apartment.owner = {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.co",
// }

// console.log(apartment);

// // Доповни код, присвоївши оголошеним змінним вирази звернення
// // до відповідних властивостей об'єкта apartment.
// //aptRating - рейтинг;
// //aptDescr - опис;
// //aptPrice - ціна;
// //aptTags - теги.

// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice= apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);

// // / Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// // властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags;
// const firstTag  = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];
// console.log(apartment);

// const user = {
//     name: "Mykola",
//     age: 17,
//     friends: ["Rostik", "Vlad", "Nazar", "Lev", "Davyd", "Vlad.K"],
//     email: "test@gmail.com",
//     password: "qwerty",
//     showName() {
//         console.log(this.name);
//     },
//     showFriends() {
//         console.log(`Кількість друзів у ${this.name} складає з ${this.friends.length} друзів`);  
//     },
//     addFriend(newFriend) {
//         if (this.friends.length < 10) {
//             this.friends.push(newFriend);
//         } else {
//             console.log("База переповнена");
            
//       }
//     },
// }
// user.showName();
// user.showFriends();
// user.addFriend("Юра");
// user.addFriend("Юра");
// user.addFriend("Юра");
// user.addFriend("Юра");
// user.addFriend("Юра");
// user.addFriend("Юра");
// user.addFriend("Юра");
// console.log(user.friends);

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
// const bankAccount = {
//     ownerName: "Lev Derevyanchuk",
//     accountNumber: "43-523-545-421-003",
//     balance: 2000,
//     deposit(amount) {
//         this.balance += amount;
//         alert(`Ваш ${this.balance} поповнено на ${amount}`)
//     },

//     withdraw(amount){
//         if (amount > this.balance) {
//             alert("У вас не достатньо грошей")
//         }
//         else {
//             this.balance -= amount;
//             alert(`З рахунку знято ${amount} у вас на рахунку ${this.balance}`)
//         }
//     }
// }

// bankAccount.deposit("qwerty");

// const firstPart = "LIKES";
// const object = {
//     name: "вася",
//     [firstPart]: true,
// };

// console.log(object[firstPart]);

// const user = {
//     name: "Mykola",
//     age: "17",
//     friands: ["Rostik", "Vlad", "Nazar", "lev"],
//     location: {
//         coutry: "Ukraine",
//         city: "lviv",
//         address: "central",
//         home: 17,
//     }
// }
// console.log(user);

// for (let key in user) { //Перебираємо об'єкт!
//     if (Array.isArray(user[key])) { // Перевіряєво чи значенням ключа є масив!
//         for (let name of user[key]) {// Перебираємо масив!
//             console.log(name);
            
//         } 
//     }    
// }

// //Перевірка на внутрішній об'єкт і перевір його!
// for (let key in user) {
//     if (typeof (user[key]) === "object" && user[key] !== null && !Array.isArray(user[key])) {
//         for (let element in user[key]) {
//             console.log(element);
//             console.log(user[key][element]);
            
//         }
//     }
// }


// const some = {
//     name: "Nazar",
//     age: 14,
//     work: true,
// }
// const key = Object.keys(some);
// console.log(key);
//  for(let i of key) {
//     console.log(`${i} - ${some[i]}`);
    
//  }

//  const c = 5;
// const d = 5;
// console.log(c === d);//true
// const e = {};
// const f = {};
// console.log(e === f);// false
// //у випадку зі складними типами даних якщо ми передаємо значення однієї змінної в іншу (об'єкт чи масив) то в іншу змінну передається за посиладанням оригінал цього об'єкта. приcвоєння за посиланням
// const objA = {
//     x: 1,
//     y: 2,
//     z: 6,
// }
// const objB = objA;
// console.log(objB === objA);
// objB.x = 50;
// console.log(objA);
// console.log(objB);

// const namesMassiv = ["Vlad", "Nazar", "Mukola", "Lev", "Rostik", "David"];

// const copyNames = [...namesMassiv];
// console.log(copyNames);
// copyNames.push("Yura");
// console.log(copyNames);
// console.log(namesMassiv);

const user = {
    name: "Lev",
    age: 13,
}

const copyUser = {...user};
console.log(copyUser);
copyUser.city = "Chernivtsi";
console.log(copyUser);
console.log(user);





