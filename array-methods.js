'use strict'
// методы массивов

// join() -> преобр элементы массива в строку с разделителем
// если разделитель не указан, то это запятая
var names = ["Oleg", "Olga", "Anna"];
console.log(names.join());

// при пустой строке без разделителей
console.log(names.join(''));

// так как join превр элементы со значением null и undefined в пустую строку, то можно сделать
// вот такой трюк, как повторение строки
console.log(new Array(4).join("ла"));

// splice(start_index, del_count, elems..) довольно универсальный метод, позволяет удалятьи 
// вставлять элементы в любую позицию
// удалить элемент в позиции 1
var langs = ["ru", "en", "ua", "de", "jp"]
langs.splice(1,1);
console.log(langs);

// для вставки без удаления del_count уст 0
langs.splice(1, 0, "kz");
console.log(langs);

// удалить элемент и заменить его другими
// здесь мы исп отр индекс которы имеет семантику как в python n-ый c конца
langs.splice(-1, 1, "chi", "jp", "ko");
console.log(langs);

var nums = [1,2,3,4,5,6,7,8];
// !!! вызов splice(), только с индексом удалит все элементы с этог индекса включительно
nums.splice(6);
console.log(nums);

// slice(start, [end]) - создает срез массива и возвр его в кач копии
// семантика похожа на python, только нет step.
// можно указывать отр индексы
console.log(langs.slice(-3)); // последние 3 элемента

// вызов slice() без аргументов просто созд копию массива
var langsNew = langs.slice();

// сортировка inplace осущ методом sort([cmp_func])
// !!! важно что сортирвка приводит элементы к строке и потом их сортирует с использованием 
// лексикографической сортировки
var results = [15,1,2];
console.log("sort by string compare", results.sort()); // [1,15,2] - что никак нас не устраивает

// поэтому исп спец функцию для сравнения значений
function compareNumeric(a,b){
    return a - b;
}
console.log("sort by compareNumeric()", results.sort(compareNumeric)); // теперь все норм