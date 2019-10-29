# json.message do
#   json.content  @message.content
#   json.id  @message.id
#   json.user_name  @message.user.name
#   json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
#   json.image @message.image.url
#   json.(@message, :content, :image)
# end

json.(@message, :content, :image)
json.user_name @message.user.name
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.content @message.content
json.image @message.image.url
json.id @message.id
