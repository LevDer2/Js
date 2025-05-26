// const Car = function (data) {
//     this.model = data.modelCar,
//     this.price = data.modelPrice,
//     this.color = data.modelColor
// }
// const data = {
//     modelCar: "Bmw",
//     modelPrice: 1000,
//     modelColor: "purple",
// }
// const bmw = new Car(data);
// console.log(bmw);
// const toyota = {
//     modelCar: "Toyota",
//     modelPrice: 3000,
//     modelColor: "white",
// }
// const toyota1 = new Car(toyota);
// console.log(toyota);



// 🚗 ЗАДАЧА: Клас Машина і Клас Електромобіль
// Уявімо, що ми створюємо програму для автосалону. Є звичайні машини, а є спеціальні — електромобілі. Всі вони мають марку (назву) і колір, але електромобілі ще мають рівень заряду батареї.

// ✅ ВИМОГИ
// Створити клас Car, який має:

// публічні властивості brand (марка) і color

// метод describe() — який описує машину: "Це [brand] кольору [color]"

// Створити клас ElectricCar, який наслідує Car і додає:

// приватну властивість #batteryLevel

// геттер і сеттер для batteryLevel

// метод charge() — який додає заряд

// Клас звичайної машини

class Car {
    //Конструктор викликається при створенні нової машини
    constructor(brand, color) {
        this.brand = brand;//Приходить марка машини тупу ауді
        this.color = color;//Приходить колір вашої машини зелений
    };
    //метод який описує машину: "Це [brand] кольору [color]"
    describe() {
        return `Це ${this.brand} кольору ${this.color}`
    }
}



//Клас електромобіля який наслідує клас Car
class ElectricCar extends Car {
  #batteryLevel; // Приватна властивість  яка буде доступна виключну в класі електрокар
  constructor(brand, color, batteryLevel) {
    super(brand, color); //Викликаємо  коструктор батьківського класу
    this.#batteryLevel = batteryLevel;
    }
    //Метод який буде повертати рівень заряду акумулятора
  get batteryLevel() {
    return this.#batteryLevel;
    }
    // Метод який буде змінювати рівень заряду акумулятора
    set batteryLevel(Level) {
        if (Level < 0 || Level > 100) {
            console.log('Помилка рівень вашого заряду акумулятора має бути від 0 до 100');     
        }
        return (this.#batteryLevel = Level);
  }
    charge(value) {
        this.#batteryLevel += value
        console.log(`${this.brand} заряджено поточний рівень складає ${this.#batteryLevel} %`);//Змінили метод для заряджання батареї, і показали повідомлення про новий рівень заряду акумулятора
        
    }
};
//Створюємо машину
const audi = new Car("Audi", "white")
console.log(audi.describe());
