$(function(){
  function buildHTML(data){
    let imgHTML = data.message.image? `<img class="lower-message__image" src="${data.message.image}"></img>` : ""

    let html = `<div class="message">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">
                    ${data.message.user_name}
                    </div>
                    <div class="message__upper-info__time">
                    ${data.message.date}
                    </div>
                  </div>
                  <div class="message__lower-message">
                    <p class="lower-message__content">
                    ${data.message.content}
                    </p>
                    ${imgHTML}
                  </div>
                </div>`
    return html;
  }
$(document).on('turbolinks:load',function(){
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      let formData = new FormData(this);
      let url = window.location.href + ''
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false,
      })
      .done(function(data){
        let html = buildHTML(data);
        $('.messages').append(html);
        $('#new_message')[0].reset();
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
        $('.form__submit').removeAttr('disabled');
      })
      .fail(function(){
        alert('メッセージを入力してください');
        $('.form__submit').removeAttr('disabled')
      })
    });
  });
});