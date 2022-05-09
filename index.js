

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
const fibon = function(num=10){

  let a = 0;
  let b = 1;
  let sum = 0;

  for(let i=0; i<num; i++){
    sum += b;
    b = sum;
    a = b;
  }
  return sum;
}