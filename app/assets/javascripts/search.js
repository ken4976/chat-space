$(function(){
  var index_list = $("#user-search-result");
  function appendUser(user) {
    var html =
            `<div class="chat-group-user clearfix" id="chat-group-user-${ user.id }">
              <p class="chat-group-user__name">${ user.name }</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
            </div>`
                $("#user-search-result").append(html);
  }
  function appendNoUser(user){
    var html = ``
    $("#user-search-result").append(html);
  };
$("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
  })
      .done(function(users){
        $("#user-search-result").empty();
        if (users.length !== 0 && input.length !== 0) {
        users.forEach(function(user) {
        appendUser(user);
  });
  }
      else{
       appendNoUser("一致する名前はありません");
    }
  })
     .fail(function() {
      alert('ユーザー検索に失敗しました');
  });
});
  function addMember(id,name){
    var html =
            `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user'>
              <input name='group[user_ids][]' type='hidden' value='${id}'>
              <p class='chat-group-user__name'>${name}</p>
              <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
            </div>`
                  $(".chat-group-users").append(html)
  }
  $(document).on("click", ".chat-group-user__btn--add", function() {
    var user_id = $(this).data("user-id");
    var user_name = $(this).data("user-name");
    addMember(user_id, user_name);
    $("#chat-group-user-" + user_id).remove();
  });
  $(document).on("click", ".user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn", function() {
    $(this).parent().empty();
  });
});
