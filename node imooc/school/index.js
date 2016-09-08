var myclass = require('./myclass');

exports.add = function (classes) {
  classes.forEach(function(item,index){
    var _class = item;
    var teacherName = item.teacherName;
    var students = item.students;

    myclass.add(teacherName,students);
  })
}