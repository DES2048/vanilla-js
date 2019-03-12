'use strict'
// Типы данных в js

// 1. Числовой тип в js всего один, представлен в формате double precision или float64
var pi = 3.14;


// 2. Строки, можно заключать как в одиночные так и в двлойные кавычки
// соотв. кавычки можно чередовать внутри строк
// отдельного символьного типа нет
// typeof -> "string"
// object String

var myName = "Oleg"

// 3. булев тип 2 литерала
// объект Boolean
var isTrue = true
var isFalse = false

typeof isTrue // -> "boolean"

// СПЕЦ ТИПЫ

// undefined - этот тип имеет неприсвоенная переменная, а так же отстуствующие свойства у объекта и 
// элементы массива
var smt;
typeof smt; // -> undefined

// null - спец тип обозначающий пустое значение
var data = null
// !!! интререно что typeof от null возвар "object" - общеизвестная ошибка языка
typeof data // -> object

// эти 5 типов данных считаются примитивными

// object - тип как понятно для объектов, массивов функции и проч
var info = {
    name: "Oleg",
    age: 31
}

var func = function(a,b){
    return a+b
}

// !!! интересно что typeof от функции вернен function, хотя отдельного типа для функций нет
typeof func; // function