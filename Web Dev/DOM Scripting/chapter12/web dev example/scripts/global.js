function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertAfter(newElement,targetElement.nextSibling);
	}
}
function addClass(element,value){
	if (!element.className) {
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className = newClassName;
	}
}
以上是常用的几个功能性函数，是通用的