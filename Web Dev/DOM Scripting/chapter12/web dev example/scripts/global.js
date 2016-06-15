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
// 以上是常用的几个功能性函数，是通用的
function highLightPage() {
	// 以上是检查正确性的代码，并取得nav元素数组（虽然只有一个）
	if (!document.getElementsByTagName) {return false};
	if (!document.getElementById) {return false};
	var headers = document.getElementsByTagName("header");
	if (headers.length == 0) {return false};
	var navs = headers[0].getElementsByTagName("nav");
	if (navs.length == 0) {return false};
	// 取得链接数组，
	var links = navs[0].getElementsByTagName("a");
	var linkurl;
	// 循环对比找到是本页面的地址，添加here类
	for (var i = 0; i < links.length; i++) {
		linkurl = links[i].getAttribute("href");
		if (window.location.href.indexOf(linkurl) != -1) {
			links[i].className = "here";
			var linktext = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
		}
	}
}
addLoadEvent(highLightPage);