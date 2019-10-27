$(function(){
  function buildHTML(data){
    var imgHTML = data.message.image? `<img class="lower-message__image" src="${data.message.image}"></img>` : ""

    var html = `<div class="message">
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
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = window.location.href + ''
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#message_content').val('')
      $('#message_image').val('')
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight})
      $('.form__submit').removeAttr('disabled')
    })
    .fail(function(){
      alert('error');
      $('.form__submit').removeAttr('disabled')
    })
  })
})