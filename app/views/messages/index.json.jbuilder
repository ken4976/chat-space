json.messages @new_messages.each do |message|
  json.user_name    message.user.name
  json.created_at   message.created_at
  json.content      message.content
  json.image        message.image.url
  json.id           message.id
end
