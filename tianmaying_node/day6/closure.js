// 作用域和闭包
function Count() {
  var num = 0;
  
  this.add = function(){
    console.log(num++);
  }
}
var c = new Count();

c.add();
c.add();
c.add();
c.add();
c.add();
c.add();
c.add();