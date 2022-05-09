'use strict' // ES2015

// const sideSquare = prompt('sideSquare','10');
// /**
//  * 
//  * @param {number} a 
//  * @returns {null | number}
//  */
// const calcPerimetrSquare = function(a){
//   if(side<0){
//     return null
//   }
//   return a*4

// };

// console.log(calcPerimetrSquare(sideSquare));




// let ageUser = 20;
// const isAdult = function(age){

//   return (age<=17) ? false : true

// }
// // (age<=17) ? false : true
// console.log(isAdult(18))



// const inputText = function(){

//   let input = prompt('введи значение');

//   if(input===null || input===''){
//     alert('ты ничего не ввел')
//   }else{
//     alert('ты ввел', input)
//   }

// };
// inputText();




// const checkAdult = function (age) {
//   return age>=18 ? 'adult' : 'not adult';
// }



//**** ввод пароля ограниченное колво раз
// let i = 0
// while(true){
//   const userInput = prompt('enter password');
//   i++
//   if(i===4){
//     alert('error');
//     break
//   }
//   if(userInput === CORRECT_PASSWORD){
//     alert('welcome');
//     break
//   }
// }



//**** факториал числа
// const calcFactorial = function(num=3){

//   if(num===0){
//     return 1
//   }

//   let factorial = 1
//   for(let i=1; i<=num; i++){
//     factorial *= i
//   }
//   return factorial
// }


//**** фибоначчи  ???
// const fibon = function(num=10){

//   let a = 0;
//   let b = 1;
//   let sum = 0;

//   for(let i=0; i<num; i++){
//     sum += b;
//     b = sum;
//     a = b;
//   }
//   return sum;
// }


              //^****  обьекты ****^//

// const dog1 ={
//   name: 'bleck',
//   isMale:true,
//   say:function(){
//     return 'woof'
//   },
// }
// const dog2 ={
//   name: 'white',
//   isMale:false,
//   say:function(){
//     return 'wooooof'
//   },
// }



//*** функция конструктор обьектов

// function User(name = 'Ivan', sname = 'Ivanov', age = 18){
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.getFullName = function(){
//     return this.name + this.sname
//   }
// };

// const user1 = new User('Sofa','Lunina',12);
// const user2 = new User('Roman','Kozak',12);
// const user3 = new User('Kot','Lapkov',12);



// закрепление конструктора

// function Country(name = 'USA', population = 329500000, area = 9834000){
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function(){
//     return this.population / this.area
//   }
// }
// const ua = new Country('Ua',44130,603);
// const usa = new Country();



//Написать код, который предлагает пользователю угадать "секретное число".

// Секретное число хранится в константе.
// Пользователь пытается угадать, вы в зависимоти от ответа пользователя даете подсказки: больше или меньше секретное число.
// После того, как пользователь угадал секретное число, вы выодите ему количество попыток, которые были потрачены на угадывание.

const hiddenNumber = 23;
let counter = 1;
while(true){

  let enterNumber = prompt('введи число');

  if(enterNumber === '' || enterNumber === null || isNaN(Number(enterNumber))){
    alert('ты ввел не число, попробуй еще');
    continue
  }

  if(hiddenNumber===Number(enterNumber)){
    alert('угадал, количество попыток '+ counter);
    break
  }else{
    alert('мимо');
    counter++;
  }
}