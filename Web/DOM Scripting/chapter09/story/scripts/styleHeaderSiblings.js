// function styleHeaderSiblings() {
//   if (!document.getElementsByTagName) return false;
//   var headers = document.getElementsByTagName("h1");
//   for (var i=0; i<headers.length; i++) {
//     var elem = getNextElement(headers[i].nextSibling);
//     addClass(elem,"intro");
//   }
// }
// function addClass(element,value) {
//   if (!element.className) {
//     element.className = value;
//   } else {
//     element.className+= " ";
//     element.className+= value;
//   }
// }
// function getNextElement(node) {
//   if(node.nodeType == 1) {
// 	return node;
//   }
//   if (node.nextSibling) {
//     return getNextElement(node.nextSibling);
//   }
//   return null;
// }
// addLoadEvent(styleHeaderSiblings);
function styleHeaderSiblings() {
  //check getElementsByTagName
  if (!document.getElementsByTagName) {return false};
  //把所有h1元素保存到headers数组中
  var headers = document.getElementsByTagName("h1");
  var elem;
  //遍历headers，并摘出所有的元素节点来
  for (var i = 0; i < headers.length; i++) {
    elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.fontSize = "1.2em";
    elem.style.color = "red";
  }
}

//nodeType值为1的是元素节点，2是属性节点，3是文本节点，这是三个常用的
//本函数主要功能就是返回元素节点
function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling)
  }
  return null;
}

addLoadEvent(styleHeaderSiblings);