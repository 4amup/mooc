function sayHi(age){
  console.log("I'm", this.name, 'aged', age)
}

var student = {
  name: 'alice'
};

sayHi.call(student, 23)