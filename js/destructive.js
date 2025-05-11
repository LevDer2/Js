// const user = {
//     name: 'Mykola',
//     age: 17,
//     hobby: ['football', "voleyboll", 'tenis'],
//     weigth: 170,
//     location: {
//         city: "lviv",
//         strit: 'central',
//         home: 56,
//     }
// }
// // const userName = user.name;
// // const userCity = user.location.city
// // console.log(userName, userCity);
// //Деструктурізація об'єкту 
// const { name, age, hobby: [football, voleyball, tenis], location: {city, strit, home}} = user;
// console.log(name, age, football, voleyball, tenis, city, home, strit)

// const hotel = {
//     name: "Hilton",
//     stars: 5,
//     street: "Shevchenka",
//     location: {
//         street: "Center",

//     },
// }
// const {name = "hotel", stars = 0, street = "no info", full = "no info"} = hotel;
// // console.log(name, stars, street, full);
// const {name, stars, street: hotelStreet, location:{street}} = hotel;
// console.log(hotelStreet, street);

// const hotel = {
//     name: "Hilton",
//     stars: 5,
//     street: "Shevchenka",
//     location: {
//         street: "Center",

//     },
// }

// const {name, stars, ...s} = hotel;
// console.log(name);
// console.log(stars);
// console.log(s);

// const user = {
//     name: "sum name",
//     location: {
//         city: "Kyiv",
//         street: "Center",
//     },
//     friend: ["LEv", "Vlad", "Nazar"],

// }

// const rgb = [200, 250, 140];
// const [red, green, blue] = rgb
// console.log(`Red:${red}, Green:${green}, Blue:${blue}`);

const calculateAverageGrade = function ({ name, surname, grades }) {
    let sum = 0;
    for (let i = 0; i < grades.length; i += 1){
        // console.log(grades[i]);
        sum += grades[i];
        
    }
    // console.log(sum);
    return `${name} ${surname} отримав середню оцінку ${sum / grades.length}`
    
}

const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3],
  };
 
  console.log(calculateAverageGrade(student));