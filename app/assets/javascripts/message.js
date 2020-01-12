$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = 
    `<div class=".main_contents__messages" data-message-id=${message.id}>
      <div class='upper-message'>
        <div class='upper-message__user-name'>
          ${message.user.name}
        </div>
        <div class='upper-message__date'>
          ${message.created_at}
        </div>
      </div>
        <div class='lower-message'>
          <p class='lower-message__body'>
            ${message.body}
          </p>
        </div>
        <img src=${message.image} >
    </div>`
    return html;
    } else {
      var html = 
  `<div class=".main_contents__messages" data-message-id=${message.id}>
    <div class='upper-message'>
        <div class='upper-message__user-name'>
          ${message.user_name}
        </div>
          <div class='upper-message__date'>
            ${message.created_at}
          </div>
        </div>
          <div class='lower-message'>
            <p class='lower-message__body'>
              ${message.body}
            </p>
        </div>
    </div>`
    return html;
   };
  }
$("#new_message").on('submit', function(e){
    e.preventDefault()
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
    $('.main_contents__messages').append(html);
    $('.main_contents__messages').animate({ scrollTop: $('.main_contents__messages')[0].scrollHeight});
    $('form')[0].reset();
    $('.form__submit').prop('disabled', false);
  })

  .fail(function(){
    alert('error');
    })
  });
});