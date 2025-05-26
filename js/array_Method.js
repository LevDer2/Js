// const numbers = [3,2,6,8,13,12,90,45,1,7,9, 20];
// // const newArray = [];
// // for (let i = 0; i < numbers.length; i++) {
// //     // console.log(numbers[i]);
// //     if (numbers[i] < 20) {
// //         continue;
// //     }   
// //     // console.log(numbers[i]);
// //     newArray.push(numbers[i]);
    
    
// // }
// // console.log(newArray);
// // numbers.forEach((item) => console.log(item));
// const newArray = numbers.filter((number) => {
// return number > 20;
// })
// console.log(newArray);
// const arr = numbers.map((item) => item * 2)
// console.log(arr);

// const pets = [
//     {
//       id: "1",
//       name: "Барсик",
//       type: "кіт",
//       color: "сірий",
//       age: 2,
//       weight: 4.5,
//       isAdopted: true,
//       favoriteFoods: ["риба", "молоко"],
//     },
//     {
//       id: "2",
//       name: "Бім",
//       type: "пес",
//       color: "чорний",
//       age: 5,
//       weight: 12,
//       isAdopted: false,
//       favoriteFoods: ["кістка", "м’ясо"],
//     },
//     {
//       id: "3",
//       name: "Кузя",
//       type: "хом’як",
//       color: "білий",
//       age: 1,
//       weight: 0.2,
//       isAdopted: true,
//       favoriteFoods: ["зерно", "морква"],
//     },
//     {
//       id: "4",
//       name: "Лола",
//       type: "папуга",
//       color: "зелений",
//       age: 3,
//       weight: 0.3,
//       isAdopted: false,
//       favoriteFoods: ["яблуко", "зерно"],
//     },
//   ];


  // Task 1
  // const getPetsName = (pets) => {
  // //   const result = pets.map((pet) => {
  // //     return pet.name
  // //   })
  // //   return result
  // return pets.map((pet) => pet.name)
  // }
  //  console.log(getPetsName(pets));
   
// Завдання 2:
// Знайти всіх тварин певного типу (наприклад, "кіт").
// const getPetsByType = (pets, type) => {
//     const result = pets.filter((pet) => {
//         return pet.type === type
//     })
//     return result;
// }
// console.log(getPetsByType(pets,"кіт"));

// const getPetsByType = (pets, type) => pets.filter((pet) => pet.type === type)
// console.log(getPetsByType(pets,"кіт"));

// Завдання 3:
// Отримати імена всіх тварин, які вже знайдені в родину (isAdopted === true).

// const getAdoptedPetNames = (pets) => pets.filter((pet) => pet.isAdopted);
// console.log(getAdoptedPetNames(pets));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// // Отримати масив імен всіх гравців

// // const arrayNames = players => {
// //   return players.map((user) => user.name)
// // }

// // console.log(arrayNames(players));

// // Знайти гравця по імені

// const playerName = (players, userName) => players.find((use) => use.name === userName)

// console.log(playerName(players, "Kiwi"));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const addWeight = (players) => {
//     let sum = 0;
//     players.forEach((player) => {
//         console.log(player.weight);
//         sum += player.weight
//     })
//     return sum
// };
// console.log(addWeight(pets));

// const addTime = (players) => {
//   let sum = 0;
//   players.forEach((players) => {
//    sum += players.points
//   } )
//   return sum
// }
// console.log(addTime(players));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const reduceTags = (tweets) => tweets.reduce((acc, value) => {
//   // console.log(acc);   порожній масив
//   // console.log(value);   обʼєкт
//   value.tags.forEach(tag => {  //  по ключу value.tag перебираємо масив
//     // console.log(tag);   отримуємо кожни елемент всіх масивів
//     if (!acc.includes(tag)) {    // якщо в acc не має елемента 
//       acc.push(tag)         // то ми його туди пушимо
//     }
//   });
//   return acc    // повертаємо результат
// }, [])

// const users = [
//   { name: "Alice", balance: 3200 },
//   { name: "Bob", balance: 4100 },
//   { name: "Charlie", balance: 5800 },
//   { name: "David", balance: 5000 },
//   { name: "Eva", balance: 2816 },
// ];

// Task 1

// const calculateTotalBalance = users => {
//   return users.reduce((acc, balance) => acc + balance.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// Task 2

// const users = [
//   {name: "Sharlene Bush",friends: ["Briana Decker", "Goldie Gentry"],},
//   {name: "Elma Head",friends: ["Goldie Gentry"],},
//   {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry"],},
//   {name: "Ross Vazquez",friends: ["Marilyn Mcintosh"],},
// ];

// const getUsersWithFriend = (users, friendName) => users.filter((user) => 
//   user.friends.includes(friendName)).map((user) => user.name)


// // const getUsersWithFriend = (users, friendName) => {
// //   const filtered = users.filter((user) => {
// //     // console.log(user);
// //     // console.log(friendName);
// //         const findHasFriend = user.friends.includes(friendName)
// //         return findHasFriend
// //   })
// //   const userNames = filtered.map((user) => user.name)
// //         return userNames
// // }

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 3

// const users = [
//   { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
//   { name: "Elma Head", friends: ["Goldie Gentry"] },
//   {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
//   {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
//   { name: "Moore Hensley", friends: [] },
//   { name: "Carey Barr", friends: ["Sharlene Bush"] },
//   { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
// ];

// const getNamesSortedByFriendsCount = users => {
//   const userCopy = [...users];
//   const sortedUser = userCopy.sort((a, b) => {
//     const SorteredA = a.friends.length;
//     console.log(SorteredA);
    
//     const SorteredB = b.friends.length;
//     return SorteredA - SorteredB;
//   })
//   const sorteredNames = sortedUser.map((user) => user.name);
//   return sorteredNames
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const users = [
  { name: "Alice", skills: ["html", "css", "js"] },
  { name: "Bob", skills: ["css", "react", "nodejs"] },
  { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];

const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap((user) => user.skills);
  const delteUser = allSkills.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value)
    }
   
  }, [])
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]