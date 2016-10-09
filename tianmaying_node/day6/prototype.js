//prototype 原型链模式
var Person = {
  sayhi: function(){
    console.log("hi! I'm", this.name)
  }
};

function Student(name){
  this.name = name;
  this.school = 'pku';
}

Student.prototype = Person;

var student = new Student('alice');

student.sayhi();