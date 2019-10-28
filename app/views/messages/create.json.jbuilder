json.message do |message|
  message.content  @message.content
  message.user_id  @message.user.id
  message.user_name  @message.user.name
  message.date @message.created_at.strftime("%Y/%m/%d %H:%M")
  message.image @message.image.url
end