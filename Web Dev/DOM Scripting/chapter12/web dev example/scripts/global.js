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
		parent.appendChild(newElement,targetElement.nextSibling);
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
function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {elem.style.left = "0px";}
  if (!elem.style.top) {elem.style.top = "0px";}
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
  	// ceil是向上取整，floor是向下取整，round是四舍五入取整
    dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
  	dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}
function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("intro")) return false;
  var intro = document.getElementById("intro");
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");

  var frame = document.createElement("img");
  frame.setAttribute("src","images/frame.gif");
  frame.setAttribute("alt","");
  frame.setAttribute("id","frame");
  slideshow.appendChild(frame);

  var preview = document.createElement("img");
  preview.setAttribute("src","images/slideshow.gif");
  preview.setAttribute("alt","a glimpse of what awaits you");
  preview.setAttribute("id","preview");
  slideshow.appendChild(preview);
  insertAfter(slideshow,intro);

  var links = document.getElementsByTagName("a");
  var destination;
  for (var i = 0; i < links.length; i++) {
  	links[i].onmouseover = function () {
  		destination = this.getAttribute("href");
      if (destination.indexOf("index.html") != -1) {
        moveElement("preview",0,0,5);
      }
      if (destination.indexOf("about.html") != -1) {
        moveElement("preview",-150,0,5);
      }
      if (destination.indexOf("photos.html") != -1) {
        moveElement("preview",-300,0,5);
      }
      if (destination.indexOf("live.html") != -1) {
        moveElement("preview",-450,0,5);
      }
      if (destination.indexOf("contact.html") != -1) {
        moveElement("preview",-600,0,5);
      }
  	}
  }
}
// 根据传入的id设置显示该section部分，其余隐藏
function showSection(id) {
  var section = document.getElementsByTagName("section");
  for (var i = 0; i < section.length; i++) {
    if (section[i].getAttribute("id") != id) {
      section[i].style.display = "none";
    } else {
      section[i].style.display = "block";
    }
  }
}
function prepareInternalnav() {
  if (!document.getElementsByTagName) {return false};
  if (!document.getElementById) {return false};
  var articles = document.getElementsByTagName("article");
  if (articles.length == 0) {return false};
  var navs = articles[0].getElementsByTagName("nav");
  if (navs.length == 0) {return false};
  var nav = navs[0];
  var links = nav.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    // split()方法，根据传入的分隔符参数把一个字符串分成两或多部分的一个方法,返回的是一个数组
    var sectionId = links[i].getAttribute("href").split("#")[1];
    if (!document.getElementById(sectionId)) {continue};
    // 页面加载后，需要默认隐藏所有部分
    document.getElementById(sectionId).style.display = "none";
    // destination是一个永久的属性
    links[i].destination = sectionId;
    links[i].onclick = function(){
      showSection(this.destination);
      return false;
    }
  }
}
addLoadEvent(prepareSlideshow);
addLoadEvent(highLightPage);
addLoadEvent(prepareInternalnav);