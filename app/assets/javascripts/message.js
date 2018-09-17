$(function(){
  function buildHTML(message){
    if (message.image == null) {
        message.image = ""
      }
    var html =
              `<div class = content-main__message data-message-id="${message.id}">
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

// ここから自動更新機能
  var interval = setInterval(function(){
  // ルートパス取得
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_id = $('.content-main__message:last').data('message-id');
      console.log("last_id:" + String(last_id));
      $.ajax({
        url: location.href,
        dataType: 'json',
        data: {last_id: last_id}
        })
        .done(function(json){
          console.log(json)
          var insertHTML = '';
          json.messages.forEach(function(message){
            insertHTML += buildHTML(message);
          });
          $('.content-main').append(insertHTML);
          $('.content-main').animate({scrollTop: $('.content-main')[0].scrollHeight}, 'fast')
        })
        .fail(function(json){
          alert('自動更新に失敗しました')
        });
        }else{
          clearInterval(interval);
        }}, 5 * 1000);
});
