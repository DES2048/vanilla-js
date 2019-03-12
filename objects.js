'use strict'

// Объекты в js устроенны как ассоц. словари, чем то это похоже на python, там данные хранятся в __dict__

// создать объект можно так
var ob = Object();

// добавим свойства
ob.good = "Хлеб";
ob.qty = 10;
ob.price = 15;

// добавим метод
// this - это указатель на тек. объект
ob.amount = function() {
  this.amount = this.qty * this.price;
  return this.amount;
}

// или с помощью json-литерала, что исп намного чаще
var foo = {}; // пустой объект

// c иниц свойствами
var carInfo = {
  model: "Nissan 350z",
  manufacturer: "Nissan",
  hp: 250
};

// также можно создавать объекты с помощью new и конструктора

// опр. функцию конструктор
function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

// с помощью new созд объект
var mine = new Person('Oleg', 'Podzorov', 32);
var mama = new Person('Olga', 'Podzorova', 59);

//  так как конструктор функция, то можно опускать, или наоборот добавлять аргументы
// пропущ также будут иметь значени undefined
var hitman = new Person('Codename 47');

// обращение к свойствам
// можно через точку
console.log(carInfo.model);

// т.к это ассоц массив, то можно через []
console.log(carInfo['hp']);

// если обратится к несущю свойству, вернет undefined
console.log(carInfo.formula);

// установка несущ. свойства, добавит его к объекту
carInfo.year = 2002;

// удаляется свойство через delete
delete carInfo.manufacturer;
console.log("after delete manufacturer:", carInfo);

// для проверки того,есть ли у объекта какое-л свойство исп 2 метода

// in
console.log("has car a year?", 'year' in carInfo);

// сравнение с undefined
console.log("has car a manufacturer?", carInfo.manufacturer !== undefined);
// однако с Undefined надо быть осторожней, так как могут существовать свойства со знач undefined

// для перебора свойств объекта исп цикл for..in

console.log("car info:");

// ВЫводятся только созд свойства объекта в отличие от массива
// !!! в т.ч и функции, если они не были созданы через prototype

for(var key in carInfo) {
  // ключи, если они нечисловые выводтся в том порядке, в котором добавлялись
  // этого нет в стандарте, но есть соглаашение в браузерах
  console.log(key + ":", carInfo[key]);
}

// если же ключи можно привести к числу, то они сортируются как числа

var codes = {
  '7': "Россия",
  '1': 'США',
  '380': 'Украина'
};

for( var key in codes){
  console.log(key, codes[key]);
}
