function save() {// validatation
  if($('#title').val().trim() === '')
    return $('.alert-danger').html('标题不能为空').show();
    $('form').submit();
}

$(function() {
  if($('body#edit').length === 0) return;
  console.log('admin-post run!')
  $('#content').bind('input propertychange', function() {
    $('#preview').html(marked($('#content').val()));
  });
  $('#content').trigger('input');
});