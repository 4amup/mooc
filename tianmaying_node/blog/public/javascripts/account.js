function signup(){
  if(!simpleValidate()) return;

  var password = $('[name=password]').val();
  var password1 = $('#[password1]').val();
  if(password != password1){
    warn('两次输入的密码不一致');
    return;
  }
  $.post('',)
}