// "use strict"; //строгий режим


// // 9 урок ПЕРЕМЕННЫЕ И СТРОГИЙ РЕЖИМ


// a = 15;   
// console.log(a);

// let number = 5;
// const LeftBorderWidth = 10;

// number = 10;

// console.log (number);

// const obj = {
//     a : 50
// };

// obj.a = 10;

// console.log (obj)


// var name = 'Alex'; // устаревшее написание кода
// console.log(name);

// {
//     var result = 50;
// }
// console.log(result);

// alert(5);
// [].push('a');


//урок №10 ПРАВИЛА И ТИПЫ НАЗВАНИЯ ПЕРЕМЕННЫХ


// const vehicleBodyWidth = 5000,
//       vehicleBodylength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodylength);

// ['yra', 'slava', 'vova'].map(a =>)

//Request
// Date
// Response

// snake_case - один из вариантов названия папок и файлов
// UPPER_SNAKE_CASE - програмисты так обзначают переменные которые хотят видеть как константы
// Kebab-case - один из вариантов названий папок и файлов
// PascalCase - используеться для названий классов в JS

// const COLOR_RED = '#F00';


// урок 11 КЛАССИФИКАЦИЯ ТИПОВ ДАННЫХ

 
// let number = 4.6;

// console.log(-4/0); // -Infinity
// console.log('string' * 9); // NaN

// const persone = "Alex dfgdfgdf sdfsdfsd sdfsdf 5"; // строка

// const bool = true; // true/false

// console.log(samething); //null

// let und;
// console.log(und); //undefined

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]
// console.log(arr[1]);


// урок 12 РАЗНИЦА МЕЖДУ ОБЪЕКТАМИ И МАСИВАМИ


// const arr = ['a', 'b', 'c'];

// arr[10] = '3456'; // не рекомендованый способ добваления массивов

// console.log(arr);

// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     hfg: {
//         df: [{}, {}],
//         def:{ 

//         }

//     }
// };
// const b = 'b';

// // arrObj.b = '1234'; // создание нового свойства
// arrObj[b] = {};

// // console.log(arr[1]);
// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2,};
// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };



// Урок № 13 ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ


// alert('hello');

// const result = confirm("Пользователь находится тут");
// console.log(result);

// const answer = +prompt ("Вам есть 18", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt ('Как ваше имя','alex');
// answers[1] = prompt ('Какая у вас Фамилия','osyn');
// answers[2] = prompt ('Сколько вам лет','26');

// // document.write(answers);

// console.log(typeof(answers));
// console.log(typeof(null)); //- официально признаная ошибка 


// // Урок 14 ИНТЕРПОЛЯЦИЯ


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/12`);//конкатенация строк
 
// const uzer = 'Alex';

// console.log(`Привет, ${uzer}!`);
// console.log(5+ +`${uzer}!`); //выдаст NaN


// // Урок 15 ОПЕРАТОРЫ В JS


// let incr = 10,
//     dscr = 10;

// incr++; // префексная запись инкремента
// dscr--; // префексная запись декримента

// ++incr;//постфиксная запись инкремента
// --dscr;//постфиксная запись декримента

// console.log(incr);
// console.log(dscr);

// console.log(5%2); // - выдаёт остаток от чесла 

// console.log(2*4 == 8); //- оператор сравнения == которое выдаёт булевае начение
// console.log(2*4 === '8'); // оператор строгова сравнения по типу данных === которое выдаёт булевае начение

// console.log(2 + 2 * 2 != 8); // данный оператор означает не равенство != 

// // && оператор и работает только тогда когда два или более подопатных являються правдивыми выражениями
// // || оператор или работает когда хотябы один из вариантов правдивый

// const isChecked = false,
//         isClosed = false;

// // console.log(isChecked && isClosed);  пример на оператори "и" если оба действия верны то мы будем что то делать

// console.log(isChecked || !isClosed);  // пример на оператори "или" важно выполнениея одного из условие, вслучае если хотя бы одно из всех выполняеться будет true

// // ! - оператор отрецания - меняет значения с правды на ложь и наоборот

//Урок №19 Практика

// Задание №1

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '677');

// // // Задание №2
// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };

// // Задание №3
// const watchingAMovie = prompt ('Один из последних просмотреных фильмов', "Jek Richer"),
//       watchGrade = prompt ('На сколько оцените его',"5.6"),
//       watchingAMovieA = prompt ('Один из последних просмотреных фильмов', "Jeki Chan"),
//       watchGradeB = prompt ('На сколько оцените его',"9.9");

//  personalMovieDB.movies[watchingAMovie] = watchGrade;
//  personalMovieDB.movies[watchingAMovieA] = watchGradeB;

//  console.log(personalMovieDB);

// Урок № 20 Условия
// if (4 == 9){           // условие превращает любой тип данных в булиновый
//     console.log('Ok!')
// } else {
//     console.log('Error')
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Слишком Много');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error'); // тернарный оператор - он так называеться потому что в его работе участвувает аж 3 аргумента 

// 4 + 4 // Бинарный агрумент 
// +"4" // Унарный 

// let num = +prompt('сколько тебе лет',"22")  //  В конструкции switch мы проверяем только на строгое соответствие
// switch (num) {
//     case 12:
//         console.log('Совсем мало');
//         break;
//     case 16:
//         console.log('Нужно немного подрасти');
//         break;
//     case 18:
//         console.log('Ты соверешенно летний, заходи!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }   

// Урок №21 Логические операторы
// const hamberger = true ; 
// const fries = true ;

// if (hamberger && fries){
//     console.log("Я сыт");
// }

// console.log((hamberger && fries));


// const hamberger = 5;
// const fries = 0;

// if (hamberger && fries) {
//     console.log("Я сыт!");
// } else {
//     console.log('Я голоден!');  
// }

// const hamberger = 3;
// const fries = 1;
// const cola = 0;

// console.log ((hamberger === 3 && cola  && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'ssdfsfsdfa');



// if (hamberger === 3 && cola === 1 && fries === 1) {
//     console.log("Я сыт!");
// } else {
//     console.log("Мы уходим");
// }

// console.log( !1 && 2 || !3 );

// const hamberger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 4;


// if (hamberger === 3 && cola === 2 || fries === 3 && nuggets ) {
//     console.log("Все довлольны!");
// } else {
//     console.log("Мы уходим");
// }
// console.log (hamberger === 3 && (cola === 2 || fries === 3) && nuggets );

// let johnReport, alexRepore, samReport, mariaReport = 'done';

// console.log(johnReport || alexRepore || samReport || mariaReport )

// Домашка
// console.log( NaN || 2 || undefined ); // 2


// console.log( NaN && 2 && undefined ); // nan


// console.log( 1 && 2 && 3 ); // 3


// console.log( !1 && 2 || !3 ); // false 


// console.log( 25 || null && !3 ); // 25


// console.log( NaN || null || !3 || undefined || 5); // 5


// console.log( NaN || null && !3 && undefined || 5); //5


// console.log( 5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 2 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// Урок 22 Циклы

// let num = 50;

// // while (num <= 55) {
// //     console.log(num)
// //     num++;
// // }

// // do {
// //     console.log(num)
// //     num++;
// // }

// // while (num <= 55);
 
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break; - останавливает цикл на 9
//         continue; - //останавливает цикл на 10 но при этом пропускает тот шаг который нам не нуден 
//     }
//     console.log(i);
// }

// fot (let i = 1, i < 3, i++) {
//    console.log(i);
//    fot (let j = 1, j < 3, j++)
//    console.log(j);
// }

//Дополнительный урок №22 цикл в цикле и метки
// let result = '';
// const length = 10;

// for (let i = 1; i < length; i++){

//    for (let j = 0; j < i; j++){
//       result += "*";
//    }

//    result += '\n';
// }

// console.log(result);


// let star = '*';

// let length = 6;

// let result = '';

// for (let i = 1; i < length; i++) {

//     console.log(result += star);

// }

// let result = '';

// for (let i = 1; i < 10; i++) {

//     console.log(result += '*');

// }

// first: for (let i = 0; i < 3; i++) {
//    console.log(`first level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Seconsd level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) continue first;
//          console.log(`Third level: ${k}`);
//       }
//    } 
// }

//
// let i = 5
// while (i <= 10){
//     console.log(i);
//     i++
// }

// for(let i = 20; i > 10; i--){
//     if( i === 13){
//         break
//     } 
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }




// let i = 2
// while (i <=16){
//     if(i % 2 === 0){
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;   
// }

// let obj =[];
// for (let i = 5; i < 10; i++){
//     obj[i - 5] = i  
// }
// console.log(obj)

// let obj = [];
// let i = 5;
// while (i < 10){
//     obj[ i - 5 ] = i
//     i++
// }
// console.log(obj)

// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzBazz')
//     }else if (i % 5 === 0){
//         console.log('Buzz')
//     }else if (i % 3 === 0){
//         console.log('fizz')
//     }else {
//         console.log(i)
//     }
// }