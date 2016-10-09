// 包装log函数-手工实现
function log(){
  var str = '';
  for(var i = 0; i < arguments.length; i++){
    str += ' ' + arguments[i]
  }
  console.log(str);
}

log('a', 'b', 'c');