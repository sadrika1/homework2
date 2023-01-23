// задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

// задание 2
const firstIphoneYear = 2007;
alert (`Год выпуска первого Iphone - ${firstIphoneYear}`);

//задание 3 
const javaScriptDad = 'Брендан Эйх';
alert (`Имя создателя языка JavaScript - ${javaScriptDad}`);

//задание 4
let x = 10;
let y = 2;
alert (`${x + y}, ${x - y}, ${x * y}, ${x / y}`);

// задание 5
let exponentiation = 2
let result = exponentiation**5
alert (result);

// задание 6 
let b = 9;
let c = 2;
alert (`${b % c}`);

// задание 7 
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// задание 8 
let age = prompt('Сколько вам лет?');
alert (age);

// задание 9
let user = {
    name: 'Игнат',
    age: 25,
    isAdmin: true
};
user['city of residence'] = 'Москва';
user.age = 60;
delete user['city of residence'];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// задание 10 
let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);


