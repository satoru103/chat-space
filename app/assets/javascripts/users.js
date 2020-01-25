$(function() {

  function appendUsers(user){
      let html =
    `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`;
    $("#user-search-result").append(html);
    }

    function appendErrMsgToHTML(){
      let html =
      `<div class="chat-group-user clearfix">
         <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>`;
      $("#user-search-result").append(html);
    }

    function  deleteUser(user_id, user_name){
      var html = 
      `<div class="chat-group-user clearfix" id="${user_id}">
        <p class="chat-group-user__name">${user_name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${user_id}" data-user-name="${user_name}">削除</div>
    </div>`
    $(".js-add-user").append(html);
    }
    function adduser(user_id) {
      let html = `<input value="${user_id}" name="group[user_ids][]" type="hidden" id="group_user_ids_${user_id}" />`;
      $(`#${user_id}`).append(html);
    }

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
        appendUsers(user)
        });
      }else if (users.length == 0) {
       return false;
      }else{
        appendErrMsgToHTML();
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
  });

  $(document).on('click', ".chat-group-user__btn--add", function(){

    var user_id = $(this).attr("data-user-id");
    var user_name = $(this).attr("data-user-name");
    $(this).parent().remove();
    deleteUser(user_id, user_name);
    adduser(user_id)
   });
   $(document).on("click", ".chat-group-user__btn--remove", function() {
    $(this).parent().remove();
  });
});