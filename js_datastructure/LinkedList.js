function LindedList() {
  // 创建Node构造函数
  var Node = function(element){
    this.element = element;
    this.next = null;
  };
  // 初始化
  var length = 0;
  var head = null;

  this.append = function(element){
    var node = new Node(element);
    // 指向列表当前项的变量current
    var current;

    if (head == null) {
      head = node;
    } else {
      current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  this.insert = function(position, element){
    // 检查position的有效性，否则就地返回null
    if (position >=0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position == 0) {
        node.next = head;
        head = node;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++; // 更新列表长度
      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function (position){
    // 检查position的有效性，否则就地返回null
    if (position > -1 && position < length) {
      // 创建一个current，并建立对第一个元素的引用
      var current = head;
      var previous;
      var index = 0;
      // 移除第一项，我们要做的就是把head指向链表的第二项元素
      if (position == 0) {
        head = current.next;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        // 要从列表中移除当前元素，要做的就是将previous.next和current.next链接起来
        previous.next = current.next;
      }
      // 更新链表的长度
      length--;
      return current.element;
    }else{
      return null;
    }
  };
  this.remove = function(element){};
  this.indexOf = function(element){};
  this.isEmpty = function(){};
  this.size = function(){};
  this.toString = function(){};
  this.print = function(){};
};

// 测试部分
var list = new LindedList();
list.append(15);
list.append(10);