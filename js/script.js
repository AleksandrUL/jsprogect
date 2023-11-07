// // let number = 5;
// // const LeftBorderWidth = 10;

// // number = 10;

// // console.log (number)

// // const obj = {
// //     a : 50
// // };

// // obj.a = 10;

// // console.log (obj)

// const answers = [];

// // answers[0] = prompt ('Как ваше иvя','');
// // answers[1] = prompt ('Какая у вас Фамилия','');
// // answers[2] = prompt ('Сколько вам лет','');

// console.log(typeof(answers));
// console.log(typeof(null));

// // Урок 14 Интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/12`);//конкатенация строк
 
// const uzer = 'Alex';

// console.log(`Привет, ${uzer}!`);
// console.log(5+ +`${uzer}!`); //выдаст NaN

// // Урок 15 Операторы в JS
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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// Задание №2
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
 // Задание №3
const watchingAMovie = prompt ('Один из последних просмотреных фильмов', ""),
      watchGrade = prompt ('На сколько оцените его',""),
      watchingAMovieA = prompt ('Один из последних просмотреных фильмов', ""),
      watchGradeB = prompt ('На сколько оцените его',""),
      watchingAMovieC = prompt ('Один из последних просмотреных фильмов', ""),
      watchGradeD = prompt ('На сколько оцените его',"");

      

      

 personalMovieDB.movies[watchingAMovie] = watchGrade;
 personalMovieDB.movies[watchingAMovieA] = watchGradeB;
 personalMovieDB.movies[watchingAMovieC] = watchGradeD;

 console.log(personalMovieDB);
