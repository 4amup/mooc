// factory 工厂模式
function StudentFactory(_school) {
  var school = _school;

  this.create = function(name, age){
    return {
      name: name,
      age: age,
      school: school
    }
  }
}

var factory = new StudentFactory('PKU');
var student = factory.create('小明', 23);
// 结果打印出来
console.log(student);