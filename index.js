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

// const hiddenNumber = 23;
// let counter = 1;
// while(true){

//   let enterNumber = prompt('введи число');

//   if(enterNumber === '' || enterNumber === null || isNaN(Number(enterNumber))){
//     alert('ты ввел не число, попробуй еще');
//     // counter++  предположим ошибка не считается за попытку
//     continue
//   }

//   if(hiddenNumber===Number(enterNumber)){
//     alert('угадал, количество попыток '+ counter);
//     break
//   }else{
//     let compas = 'меньше';
//     if(hiddenNumber>enterNumber){
//       compas = 'больше'
//     }
//     alert('мимо, искомое число ' + compas);
//     counter++;
//   }
// }



//вывод в консоль числа кратного num в заданном диапазоне(вывод в обратном порядке)

// const logRangeNumber = function(start = 20, end = 15, num = 3){
  // console.log(start);

  // for(let i=start; i>=end; i--){
  //   if(i%num===0){
  //     console.log(i);
  //   }

  // }

//   while(start>=end){

//     if(start%num===0){
//       console.log(start);
//     }
//     start--
//   }
// }

// start=12; end=20; num=3;

// for(let i=start; i<=end; i++){
//   if(i%num===0){
//     console.log(i);
//   }

// }




//предвагать решить пример пользователю, пока он его не решит


const calc = function(num1, num2, sign){
  
  let result;
  
  switch (sign){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  return result

}
const questionUser = function(number1, number2, sign,){
  let result = calc(number1, number2, sign);

  let counterEnd = 0;
    while(true){
      
    // debugger

    let enterResult = prompt(`введи решение примера ${number1} ${sign} ${number2} = `);
    if(enterResult === ''){
      counterEnd++;
      if(counterEnd === 3){
        // alert('отмена через три пустых ввода');
        return false
      }
    }
    
    if(isNaN(Number(enterResult))){
      alert('ты ввел не число, попробуй еще');
      continue
    }
    if(enterResult === null){
      // alert('отмена так отмена');
      return false
    }
    
    if(result===Number(enterResult)){
      // alert('правильно, ура');
      counterEnd = 0
      return true
    }
  }

}
const trenningMath = function(number1 = 3, number2 = 10, sign ='+'){
  
  if(isNaN(number1*number2)){
    return false
  }

  if(sign==='*'||sign==='/'||sign==='+'||sign==='-'){
    if(questionUser(number1, number2, sign)){
      alert('правильно, ура');
    }else{
      alert('досвидание');
    }
  }else{
    alert('недопустимый оператор');
  }
}

trenningMath();




//возвращает обьект с таблицей умножения///////

// const createMultTable = function(limit=9){
//   const table = {};
//   for(let i=2; i<=limit; i++){
//     for(let j=2; j<=limit; j++){
//       table[`${i}*${j}`] = i*j;
//     }
//   }
//   return table;
// }
