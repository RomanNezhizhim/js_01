// 'use strict'; // ES2015

// const toString = function(){
//   return `${this.name} ${this.sname}`
// }

// const student = {  // new Object
//   id:1,
//   name:'Imia',
//   sname:'Petrov',
//   age:30,
//   toString, //toString:toString,
// };

// console.log(student);



//прмер прототипирования обьектов ----------------
// const rabbit = {
//   countPaw:4,
//   jump:function(){
//     return 'i\'m jumping'
//   },
// }

// const rabbitPet = {
//   name:'Pulka',
//   pet:function(){
//     return `pet ${this.name}`
//   },
// }

// const rabbitMagic = {
//   say:function(word){
//     return `rabbit say ${word}`
//   },
// }

// rabbit.__proto__ = rabbitPat;
// rabbitPat.__proto__ = rabbitMagic;





function Ladder(){
  this.step = 0;
};

function ladderProto(){
  this.up = function(){
    this.step++
    return this
  }
  this.down = function(){
    this.step--
    return this
  }
  this.showStep = function(){
    return this.step
  }
};


Ladder.prototype = new ladderProto();
const rere = new Ladder;


rere.up();
rere.up();
rere.down();
console.log(rere.showStep());