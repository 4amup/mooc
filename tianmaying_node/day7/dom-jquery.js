// dom.js
// 获得id为fruits的节点
var $ul = $('#fruits');
// 找到该元素的第一个子元素并移除
$ul.find(':first-child').remove();
// 创建一个li元素，并设置样式
var $pear = $('<li>')
    .css('color', 'red')
    .html('pear');
// 将pear添加到ul中
$ul.append($pear);