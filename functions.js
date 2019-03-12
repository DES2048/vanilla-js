'use strict'
var globalVar = 10; // это глобальная переменная

// объявляется функция след. образом
function showPopup() {
  // функция без return или с пустым return возвр. undefined
}

function min(list) {
  // var объявляет локальную переменную, которая видна в пределах функции
  // вообще говоря область вдимости переменной не огр блоком гле она была объявлена
  if(list == null || list.length == 0){
    return null;
  } else if(list.length == 1){
    return list[0];
  } else {
    var curr = list[0];
    for(i = 1; i < list.length; i++){
      if(curr > list[i]){
        curr = list[i]
      }
    }
    return curr;
  }
}

function changeGlobalVar(value){
  globalVar = value; // изменяем значение глобальной перемнной
}

function changeLocalVar(value){
  // однако, если объявить переменную с таким же именем что и глобальная, то она будет сокрыта локальной
  var globalVar = value; // изменения в глобальной переменной не произойдет
}

function personInfo(name, surname, age){
  // функцию можно вызывать с любым количеством аргументов, необязательно с тем
  // которые были объявлены, если не передать какой-то параметр то он будет undefined
  // проверяют что переменная заполнена обычно так
  name = name || 'unknown';
  surname = surname || 'unknown';
  age = age || "unknown";

  return "Person: name: " + name + ", surname: " + surname + ", age: " + age;
}

// функцию можно вывести как и люое значение
console.log(changeGlobalVar); // выведся код функции

// и вообще так как функция это объект, можно копировать функцию в другую переменную
// и вызывать ее например
var person = personInfo;
console.log(person());

// также функцию можно объявлять в стиле function expression
var validateAge = function() {
  return validateAge >= 18 && validateAge <=100;
}

// !!! Основная разница между объявлениями в том что function declaration, создаются заранее
// что позволяет использовать их до объявления, чего нельзя делать с function expression

// можно делать условное объявление функции, но при use strict такие функции будут видны только
// внутри того блока, в котором были объявлены

var funcSwitch = 1;

// не будет достпна вне if
if(funcSwitch){
  function inner(){
    return "switch 1";
  }
} else {
    function inner(){
      return "switch 0";
    }
}

var innerFunc;
// решение исп function expression
if(funcSwitch){
  innerFunc = function() {
    return "expr 1";
  }
} else {
  innerFunc = function() {
    return "expr 0";
  }
}

// ну и естесственно можно исп function expression для создания анонимных функций
// func это функция-предикат, которую мы передаем для фильтра
function filter(func, list){
  var resultList = [];

  for(i =0; i < list.length; i++){
    if(func(list[i])){
      resultList.push(list[i]);
    }
  }

  return resultList;
}

console.log("after filter [1,2,3,4,5,6,7,8,9,] to even",
  filter(
    function(e){
      return e % 2 == 0;
    },
    [1,2,3,4,5,6,7,8,9])
);

// еще один интресный способ создания функции
// первый параметр аргументы, второй код функции
var helloWorld = Function("", "return 'Hello World!';");
