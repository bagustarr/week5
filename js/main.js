/*
let apples = 1500;//обьявляем переменную apples со значением "1500"
let oranges =  2000;//обьявляем переменную oranges со значением "2000"
const tomatos = 700;//обьявляем переменную через tomatos const со значением "700", 

//меняем значение переменной apples
apples = 100;//теперь значение будет "100"

console.log(apples);//выводим переменную в консоль. значение в консоле "100"

//меняем значение переменной tomatos
const tomatos = 200;

console.log(tomatos);//выводим переменную в консоль. в консоле выводится ошибка

//Именования переменных:
let crazyfrog123 = "bam bam";
let $tarboy = 125;
let _1221 = 15;
const 123 = 1.0; // Ошибка! Переменная не может начинатся с цифры 
let var = 12; // имя переменной не может быть ключевым словом
*/


/*
//2 ТИПЫ ДАННЫХ
let number = 50;
let bigint = 25n;
let string = "lorem 5";
let boolean = true;

//2.провеерка типа данных
console.log(typeof number);
console.log(typeof bigint);
console.log(typeof string);
console.log(typeof boolean);

//3.спецальные числовые значения
let infinity = 12/0;
let minusInfinity = -89/0;
let Nan = "two" + 2;

console.log(infinity);
console.log(minusInfinity);
console.log(Nan);

//4. строки
let quotes = 'одинарные кавычки';
let quotes2 = "двойные кавычки";
let quotes3 = `обратные кавычки`;

let cats = 45,
    dogs =  87;

let catsdogs = cats * dogs;

//alert(`result ${cats+dogs}`);

//5.null и undefined
 let undef;
 console.log(typeof undef);// когда мы обьявляем переменную, но не присваевываем значение, то js автоматически присваевает значение undefined 

 let nul = null;// значение null используют, когда нужно обозначить намеренное отсутствие значения объекта (объект с неопределённой структурой).
 console.log(typeof nul);//однако, при проверке typeof результат будет "object". Это историческая ошибка в js, так как null на самом деле не является объектом, но по историческим причинам typeof null возвращает "object".

//6.Преобразование числo в строку
let numToStr = 5;
a = String(numToStr);
console.log(typeof a);

let numToStr2 = "5";
console.log(typeof numToStr2);

//строку в число
let strToNmber = "число";
b = Number(strToNmber);
console.log(typeof b);

let strToNmber2 = + "something"; 
console.log(typeof strToNmber2);
    
//7. при помощи prompt попросим у пользователя ввести имя 
let username = prompt ("Как Вас зовут?");

alert(`Добро пожаловать, ${username}!`);

check = confirm(`Вы уверены что Вас зовут ${username}?`);

alert(check);
*/

//ОПЕРАТОРЫ
let x = 10;

x += 5;

let y = 3;

let z = x**y;

let isGreaterThan1000 = z > 1000;

let complexCondition = (x > y) && (z < 10000);

console.log(`Значение переменной x: ${x}`); // x = 15
console.log(`Значение переменной y: ${y}`); // y = 3
console.log(`Значение переменной z: ${z}`); // z = 3375
console.log(`Результат сравнения z с 1000 (isGreaterThan1000): ${isGreaterThan1000}`); // true
console.log(`Результат проверки complexCondition: ${complexCondition}`); // true

