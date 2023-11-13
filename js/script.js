const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// Задание №2
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const watchingAMovie = prompt ('Один из последних просмотреных фильмов', ""),
      watchGrade = prompt ('На сколько оцените его',""),
      watchingAMovieA = prompt ('Один из последних просмотреных фильмов', ""),
      watchGradeB = prompt ('На сколько оцените его',"");

 personalMovieDB.movies[watchingAMovie] = watchGrade;
 personalMovieDB.movies[watchingAMovieA] = watchGradeB;

 console.log(personalMovieDB);
// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// // Задание №2
// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };

// const watchingAMovie = prompt ('Один из последних просмотреных фильмов', ""),
//       watchGrade = prompt ('На сколько оцените его',""),
//       watchingAMovieA = prompt ('Один из последних просмотреных фильмов', ""),
//       watchGradeB = prompt ('На сколько оцените его',"");

//  personalMovieDB.movies[watchingAMovie] = watchGrade;
//  personalMovieDB.movies[watchingAMovieA] = watchGradeB;

//  console.log(personalMovieDB);

// Урок №21 Логические операторы
// const hamberger = 5;
// const fries = 0;

// if (hamberger && fries) {
//     console.log("Я сыт!")
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

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}