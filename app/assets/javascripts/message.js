$(function(){
function buildHTML(message){
  var html = `<div class = content-main__message>
<div class = content-main__message__name></div>
  ${message.user_name}
<div class = content-main__message__days></div>
  ${message.created_at}
<div class = content-main__message__message></div>
  ${message.content}
</div>`
  return html;
}
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.content-main__message').append(html)
      $('.form__message').val('')
      .fail(function(){
      alert('error');
});
});
});
});
