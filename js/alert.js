 "use strict";

// let a = "1";
// let b = 0;
// switch (+a) {
//     case b + 1:
//         alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
//         break;
//     default:
//         alert("Это не выполнится");
// }

// let a = 3;
// switch (a) {
//     case 4:
//         alert('Правильно!');
//         break;
//
//     case 3:
//     case 5:
//     case 4:
//         alert('Неправильно!');
//         alert("Может вам посетить урок математики?");
//         break;
//     default:
//         alert('Результат выглядит странновато. Честно.');
// }

// let arg = prompt("Введите число?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert( 'Один или ноль' );
//         break;
//     case '2':
//         alert( 'Два' );
//         break;
//         case 3;
//         alert( 'Никогда не выполнится!' );
//         break;
//     default:
//         alert( 'Неизвестное значение' );
// }

 // function showMessage() {
 //     alert( 'Всем привет!' );
 // }
 //
 // showMessage();
 //

// function showMessage() {
//     let message = "Js!";
//     alert (message);
//     showMessage();
//     alert(message);
// }

 // let userName = 'Inna';
 // function showMessage() {
 //     let message = 'hi,' + userName;
 //     alert(message);
 // }
 // showMessage();




 // function showMessage(from, text) { // параметры: from, text
 //     alert(from + ': ' + text);
 // }
 // showMessage('Аня', "Как дела?");
 // showMessage('Аня', 'Привет!'); // Аня: Привет! (*)

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');
// if (n >= 1 && n % 1 == 0) {
//     alert( pow(x,n));
// } else {
//     alert (`Степень ${n} не поддерживается, используйте натуральное число`);
// }

// function square (arg) {
//     return arg*arg
// }
//
// function add (argOne, argTwo = 10) {
//     return argOne + argTwo
// }
// function squareAdd (arg) {
//     let result = square(arg)
//     return result + add(arg)
// }
// console.log('8*8:' + square(8))
//  console.log('8+20:' + add(8,20))
//  console.log('8+10:' + add(8))
//  console.log('(8*8)+(8+10):' + squareAdd(8));
//
//  function add(numOne, numTwo){
//      return numOne + numTwo
//  }
//  console.log('Hoisted:' + add(100, 200))
//  let addition = add
//  console.log('Assigned:' + addition(32,64))
//
//  let anon = function (numOne, numTwo) {
//      let result = numOne + numTwo; return result
//  }
//  console.log('Anonymous:' + anon(9,1))
//  let iffy = (function() {
//      let str = 'Self Invoked Output'; return str
//  })()
//  console.log(iffy)













 // let a = 3 + 2;
 //
 // switch (a) {
 //     case 3:
 //         alert( 'Маловато' );
 //         break;
 //     case 4:
 //         alert( 'В точку!' );
 //         break;
 //     case 5:
 //         alert( 'Перебор' );
 //         break;
 //     default:
 //         alert( "Нет таких значений" );
 // }

 // for (let i = 0; i < 3; i++) {
 //     alert(`number ${i}!`);
 // }


// let sum = 0;
// while (true) {
//     let value = +prompt("Введите число", '');
//     if (!value) break;
//     sum += value;
//
// }
//
// alert('Сумма: ' + sum);
//
//  for (let i = 4; i <= 10; i++) {
//      if (i % 2 == 0) {
//          alert(i);
//      }
//
//  }


// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//
//     }
// }
// alert('Готово!');





















 // let age = prompt('Возраст?', 18);
 //
 // let message = (age < 3) ? 'Здравствуй, малыш!' :
 //     (age < 18) ? 'Привет!' :
 //         (age < 100) ? 'Здравствуйте!' :
 //             'Какой необычный возраст!';
 //
 // alert( message );
// let value = prompt('Какое "официальное" название JavaScript?', '');
// if (value == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert ('Не знаете? ECMAScript!');
// }
//
// let year = prompt ('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if (1 > 0) {
//     alert('да вы знаток!');
// } else {
//     alert('а вот и нет');
// }

 // let value = prompt('Введите число', 0);
 //
 // if (value > 0) {
 //     alert( 8 );
 // } else if (value < 0) {
 //     alert( -1 );
 // } else {
 //     alert( 0 );
 // }
 // //
 // let result;
 //
 // if (a + b < 4) {
 //     result = 'Мало';
 // } else {
 //     result = 'Много';
 // }
 //
 // let x = 0;
 //
 // (x > 0) && alert( 'x больше нуля!' );
 //




// let accessAllowed;
// let age = prompt ('Сколько вам лет?','');
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);

 // let year = prompt ('В каком году была опубликована спецификация ECMAScript-2015?', '');
 // if (year < 2015) {
 //     alert('это рано!');
 // } else if (year > 2015){
 //     alert('это поздно');
 // }else {
 //     alert('правильно!');
 // }















// let str = "123";
// alert(typeof str);
//
// let num = Number(str);
// alert(typeof num);

 // let age = Number("Любая строка");
 // alert(age);

// let value = true;
// alert(typeof value);
//
//
//  value = String(value); // теперь value это строка "true"
//  alert(typeof value);

// let x = 1;
// x = -x;
// alert( x );

 // let x = 1, y = 3;
 // alert(y - x);

// let x = 1;
// alert( +x);
//  let y = -2;
//  alert( +y );

 // a = 1 + 2, 3 + 4;
 //
 // alert(a); // 3

 // let a = 1, b = 1;
 //
 // let c = ++a;
 // let d = b++;

 // let a = prompt("Первое число?", 1);
 // let b = prompt("Второе число?", 2);

 // let a = "1";
 // let b= "2";

 // alert(+a + +b);

 // let name = prompt("Как тебя зовут?", "Ksenia");
 // alert(name);

 // let age = prompt('Сколько тебе лет?',100);
 // alert(`Тебе ${age} лет!`);

 // let test = prompt("Test");




 // let isBoss = confirm("Как тебя зовут?");
 // alert(isBoss);

// alert("Привет javaScript");
// alert("1+4+4");
//
//
// let user = 'join';
// let age = 25;
//
//
// alert(user);
// alert(age);
//
// let message;
// message = "Hou are you";
// message = "How are you";
// alert(message);

// let hello = 'Hello Ksenia!';
// let message;
// message = hello;
//  alert(hello);
//  alert(message);
//
//  let admin = "Джон";
//  let name = "Джон";
//  alert(admin);

 // let admin, name;
 // name = "Джон";
 // admin = name;
 // alert(admin);

 // let $ = 1;
 // let _ = 2;
 // alert($ + _);