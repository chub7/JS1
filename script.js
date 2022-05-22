// 2 Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
// a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
// результат выражений:
console.log(`2 задание`); 

let a1 = (5 % 3), 
a2 = (3 % 5),
a3 = ( 5 + '3' ), 
a4 = ('5' - 3 ), 
a5 = ( 75 + 'кг' ), 
a6 = (785 * 653 ), 
a7 = ( 100 / 25 ),
a8 = (0 * 0 ), 
a9 = (0 / 2 ),
a10 = (89 / 0),
a11 = (98 + 2),
a12 = (5 - 98),
a13 = ( ( 8 + 56 * 4 ) / 2 ),
a14 = ( (9 - 12) * 7 / (5 + 2) ),
a15 = (+"123"), 
a16 = (1 || 0),
a17 = ( false || true),
a18 = ( true > 0 );

console.log(a1, typeof a1);
console.log(a2,typeof a2);
console.log(a3,typeof a3);
console.log(a4,typeof a4);
console.log(a5,typeof a5);
console.log(a6,typeof a6);
console.log(a7,typeof a7);
console.log(a8,typeof a8);
console.log(a9,typeof a9);
console.log(a10,typeof a10);
console.log(a11,typeof a11);
console.log(a12,typeof a12);
console.log(a13,typeof a13);
console.log(a14,typeof a14);
console.log(a15,typeof a15);
console.log(a16,typeof a16);
console.log(a17,typeof a17);
console.log(a18,typeof a18);

// 3 Напишите скрипт, который находит площадь прямоугольника высотой 23см и
// шириной 10см, значение высоты и ширины должны хранится в width и height,
// соответственно, а значение площади должно хранится в числовой переменной SPryam.
console.log(`3 задание`); 
let SPryam,
width = 23,
height = 10;
console.log('Площадь прямоугольника =',SPryam = (width * height));

// 4 Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
// основания равным значению переменной a7 из задания 2, результат поместите в
// переменную VCilindra.
console.log(`4 задание`); 
let VCilindra,
widthV = 10;

console.log('Площадь цилиндра =', VCilindra = (widthV * a7));

// 5 Найдите площадь круга (SKruga) с радиусом 5см (r).
console.log(`5 задание`); 
let Skruga,
Rkruga = 5;

console.log('Площадь круга =', Skruga = ( (Rkruga*Rkruga)* 3.14 ));

// 6 Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
console.log(`6 задание`); 
let a = 5,
b = 7,
h = 10,
STrap;

console.log('Площадь трапеции = ', STrap = ( ((a + b)/2) * 10));

// 7. Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
// кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
// содержаться в переменной Pereplata.
console.log(`7 задание`); 
let Pereplata,
S = 2000000,
p = 0.1,
y = 5;

console.log('Переплата =', Pereplata = ((S*p)*y));

//8 Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
// a+2(x-b)=16; a + 2x - 2b = 16 -> 2x= 16 - a + 2b -> x = 8 -a/2 + b - > x = 7
// b(x+15)=a+6x; bx+15b = a + 6x ;  bx -6х = a - 15b
// x+2x+ax+bx=23780.
console.log(`8 задание`); 
let aN = 8,
    bN = 3,
    x = 8 - aN/2 + bN;
    x2 = (aN - 15*bN) / (bN - 6);
    x3 = 23780 / (3 + aN + bN);
    console.log(`x= ${x} x2= ${x2} x3= ${x3} `);


   