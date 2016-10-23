function delPost(id) {
  $.ajax({
    url: '/admin/post/' + id,
    type: 'DELETE',
    success: function(result) {
      location.reload();
    }
  })
}