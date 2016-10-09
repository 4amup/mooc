// dom.js
// 获得id为fruits的节点
var ul = document.getElementById('fruits'),
    carrot = ul.firstElementChild;
ul.removeChild(carrot);

var pear = document.createElement('li');
// 设置pear的style属性
pear.setAttribute('style', 'color: red');
// 设置pear的内容
pear.innerHTML = 'pear';
ul.appendChild(pear);