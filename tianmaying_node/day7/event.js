function over(obj){
  obj.innerHTML = "mouse is over!"
}

function out(obj){
  obj.innerHTML = "mouse is out..."
}

window.onload = function(){
  var div = document.getElementById('block');
  div.setAttribute('style', 'background: lightgreen; width:200px; height:50px: margin: 50px');
};