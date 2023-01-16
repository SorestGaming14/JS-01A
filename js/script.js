var name = prompt('Как вас зовут?')
console.log(name);

var age = prompt('Сколько вам лет?')
console.log(age);

var add = prompt('Решите пример: 5 + 7')
var equation = '5 + 7 = '
var result = 5 + 7
var user = ' (Ваш ответ: ' + add + ')'
console.log(equation + result + user);

var sub = prompt('Решите пример: 10 - 4')
equation = '10 - 4 = '
result = 10 - 4
user = ' (Ваш ответ: ' +  sub + ')'
console.log(equation + result + user);

var multiply = prompt('Решите пример: 4 * 3')
equation = '4 * 3 = '
result = 4 * 3
user = ' (Ваш ответ: ' + multiply + ')'
console.log(equation + result + user);

var divide = prompt('Решите пример: 12 / 6')
equation = '12 / 6 = '
result = 12 / 6
user = ' (Ваш ответ: ' + divide + ')'
console.log(equation + result + user);

var div = prompt('Решите пример: 10 % 4')
equation = '10 % 4 = '
result = 10 % 4
user = ' (Ваш ответ: ' + div + ')'
console.log(equation + result + user);

var end = alert('Спасибо что ответили на все вопросы! Если хотите увидеть правильные ответы, пожалуйста зайдите в консоль разработчика!')
var endlog = 'Тест завершён пользователем'
console.log(endlog);