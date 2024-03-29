// Логические операторы, это операторы && || !
// они преобразуют свои операнды используя логический контекст, то есть
// пустая строка, 0, null, NaN, undefined ->false, все иное true

// здесь есть одна тонкость, касаемая прежде всего спец. значений
// например NaN в операциях сравнения не равен вообще ничему, удостоверится что этот NaN можно только 
// с помощью функции isNaN  то есть делаем так

function testNaN_c(value){
    return value == NaN ? true : false; // всегда будет возвращать false, незав равно ли value NaN или нет,
    // так мы используем операции сравнения, а в них NaN всегда дает false
}

function testNaN_log(value){
    return !value; // будет возвр значение в зависимости от value т.к исп лог. контекст в котором
    // NaN -> false, !Nan -> true
}

/// !!! Важная особенность логических операторов, что они исп лог. контекст для проверки истинности 
// операторов, а возвращают из выражения как правило именно значение, например

var name = "Oleg"
var fullName = "Oleg Podzorov"
var nick;

// Лог операторы вычисляются по т.н. короткому циклу, то есть либо возвр тот операнд, который разрешает все выражение в ложь или истину
// или же возвращает значение последнего операнда

// || возвр первый операнд который true

var username = nick || name || fullName; // вернет oleg
console.log("Username is", username)

// && Первый ложный, ИЛИ ПОСЛЕДНИЙ если вычисления дошли до конца что можно например исп для проверки заполнения


/// Двойное отрицание часто используется для преобразования знаения в лог тип

console.log("nan -> false", !!NaN)