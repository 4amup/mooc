function DoublyLinkedList() {
  var Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  var length = 0;
  var head = null;
  var tail = null; //小尾巴

  // 以下是各种方法
  this.insert = function(position,element){
    if (position>=0 && position<=length) {

      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position == 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position == length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
}