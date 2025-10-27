'use strict'
// как замена function expression

let foo = () => console.log('foo');

// если в теле только одно выражение то, return можно опустить
let sum = (a,b) => a + b;

// можно опустить (), если параметр только 1
let mulby2 = x => x*2;

// ну и юзаем их как обычные функции с телом

let makeUser = () => {
    return {
        name: 'oleg',
        age: 33
    }
}

//!!! у них нету своего this, поэтому они берут его из внешнего контекста
// это бывает удобно, когда мы ходим передать куда-то коллбэк, но не хотим терять контекст
let salaryResult = {
    taxPercent: 10,
    employees: [
        {name: 'Ann', salary: 1000},
        {name:'John', salary: 2000},
        {name:'Boss', salary: 5000}
    ],
    showSalaries() {
        // this как бы "прозрачен" для коллбэка, если бы была анонимка this пришлось бы передавать
        // через другую переменную, так как у нее this был бы undefined или global object
        this.employees.forEach((employee) => {
            const resultSalary = employee.salary - employee.salary*(this.taxPercent/100);
            console.log(`${employee.name} - ${resultSalary}`)
        })
    },
    showSalaries2() {
        // через обычную анонимную функцию
        // чтобы правильно реалитзовать надо передвать this через переменную
        const self = this;
        this.employees.forEach( function(employee) {
            const resultSalary = employee.salary - employee.salary*(self.taxPercent/100);
            console.log(`${employee.name} - ${resultSalary}`)
        })
    },
    showSalaries3() {
        // третий вариант конечно bind
        const cb = function(employee) {
            const resultSalary = employee.salary - employee.salary*(this.taxPercent/100);
            console.log(`${employee.name} - ${resultSalary}`);
        }
        
        this.employees.forEach(cb.bind(this));
    }

}