function save() {// validatation
  if($('#title').val().trim() === '')
    return $('.alert-danger').html('标题不能为空').show();
    $('form').submit();
}

$(function() {
  if($('body#edit').length === 0) return;
  $('#content').bind('input propertychange', function() {
    $('preview').html(maked($('#content').val()));
  });
  $('#content').trigger('input');
});