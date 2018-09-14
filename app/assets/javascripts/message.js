$(function(){
  function buildHTML(message){
    if (message.image == null) {
        message.image = ""
      }
    var html =
              `<div class = content-main__message>
                <div class = content-main__message__name>
                  ${message.user_name}
                </div>
                <div class = content-main__message__days>
                  ${message.created_at}
                </div>
                <div class = content-main__message__message>
                  ${message.content}
                  <img src="${message.image}">
                </div>
              </div>`
    return html;
  }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      $('#button').removeAttr('data-disable-with')
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
        $('.content-main').append(html)
        $('.form__message').val('')
        $('.content-main').animate({scrollTop: $('.content-main')[0].scrollHeight}, 'fast')
  })
      .fail(function(){
        alert('error');
  })
  })
});
