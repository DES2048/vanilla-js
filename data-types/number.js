// тип number в js это double64
// typeof -> "number"
// object - Number

// литералы
var integerLiteral = 10; // целый литерал
var floatLiteral = 10.8; // литерал с плавающей точкой
var americanFloat = .365; // амриканский стиль
var hexLiteral = 0xCC; // в HEX-формате
var binLiteral = 0b1001; // двоичный литерал
var exponentLiteral = 1.25e4; // в инженерном формате

// спец значения

// NaN - Not a number - получается если в результате мат. операции с числом невозможно получить числовое 
// значение, также при конвертации невалидного строкового значения в число.
// и при приведении к числу типа undefined
// есть и математические спопобы например 0/0 +Inf + -Inf, но они в данный момент неинтересны
var nanVal = NaN;

// !!! Важно любая операция с NaN также порождает NaN
var fromNan = 1 + nanVal; // NaN

// !!! Гаратнтировано проверить на NaN  можно функией isNan(),операции сравненения с литералом 
// Nan или с переменной сод NaN, всегда дает false или неверный результат
var nanVal2 = NaN

nanVal == nanVal //false
nanVal === nanVal //false
nanVal != nanVal // true !!! не равно даст true

// Однако сравнения не NaN значений с NaN вполне адекватны

// только нужно убедится что одно из чисел ТОЧНО не NaN
pi === nanVal // false
pi != nanVal // true

// Еще есть значения Infinity или +Infinity и -Infinity
// Их можно получить например при делении на ноль и при переполнении
pi/0 // Infinity
Number.MAX_VALUE +Number.MAX_VALUE // переполнение -> Infinity

// isFinite() - проверяет является ли переданое число конечным, т.е не NaN и не +-Infinity

// Все спец значения можно получить из констант встроенного объекта Number

// Операции с числом, доступны все обычные мат операции
console.log(6 + 6);
console.log(6 - 7);
console.log(6 * 5);
console.log(5 / 2); // деление не целочисленное
console.log(5 % 2); // mod

// также можно возводить в степень в python style
console.log(2**32);
// и вычислять дейст. степень, напр квадрат
console.log(9 ** 0.5); // 3

// инкременты и декременты работают как в C++
var i = 0;
console.log(i++);

// есть побитовые операции но их мы рассмотрим потом

// для всех мат и побит. операций сущ короткая форма с =
i += 5;
i /=2;

// числовое преобразование
// происходит при мат. побит операциях и в операциях сравнения, кроме некторых случаев с null и
// undefined, а также строгово равенства/неравенства

// для преобразования можно исп унарный плюс
// или же вызвать Number() вне констр. контекста

// как значения преоб в число
console.log("true -> 1", +true);
console.log("false -> 0", +false);
console.log("undefined -> NaN", +undefined);
console.log("null -> 0", +null);

// преобразование строки в число
// сначала из строки удаляются пробелы и незн символы слева и справа
// если получается пустая строка то 0,
// если оставшаяся строка валидный числовой литерал, то она приводится к числу, иначе NaN
console.log("empty string -> 0", +"" );
console.log("\\n\\n\\n", +"\n\n\n"); // -> 0, непеч символы обрез и получ пустая строка
console.log('"0" -> 0', +"0");
console.log("123 -> ", +"123");
// литерал с плав точкой
console.log("3.14", Number("3.14"));
// американский
console.log(".358", Number(".358"));




