function Dictionary() {
  var items = {};

  this.has = function(key){
    return key in items;
  };
  this.set = funtion(key,value){
    items[key] = value;
  };
  this.remove = function(key){
    if (this.has(key)) {
      delete items[key];
      return true;
    }else{
      return false;
    }
  };
  this.get = function(key){
    retuen this.has(key) ? items[key] : undefined;
  };
  this.values = function(){
    var values = {};
    for(var key in items){
      if(this.has(key)){
        values.push(items[key]);
      }
    }
    return values;
  };
  this.getItem = function(){
    return items;
  }
}