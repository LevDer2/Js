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

const pets = [
    {
      id: "1",
      name: "Барсик",
      type: "кіт",
      color: "сірий",
      age: 2,
      weight: 4.5,
      isAdopted: true,
      favoriteFoods: ["риба", "молоко"],
    },
    {
      id: "2",
      name: "Бім",
      type: "пес",
      color: "чорний",
      age: 5,
      weight: 12,
      isAdopted: false,
      favoriteFoods: ["кістка", "м’ясо"],
    },
    {
      id: "3",
      name: "Кузя",
      type: "хом’як",
      color: "білий",
      age: 1,
      weight: 0.2,
      isAdopted: true,
      favoriteFoods: ["зерно", "морква"],
    },
    {
      id: "4",
      name: "Лола",
      type: "папуга",
      color: "зелений",
      age: 3,
      weight: 0.3,
      isAdopted: false,
      favoriteFoods: ["яблуко", "зерно"],
    },
  ];


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

const getAdoptedPetNames = (pets) => pets.filter((pet) => pet.isAdopted);
console.log(getAdoptedPetNames(pets));
