var accessToken = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN');

function doPost(e) {
  var json = JSON.parse(e.postData.contents).events[0]
  var replyToken = json.replyToken;
  var userMessage = json.message.text;
  var url = 'https://api.line.me/v2/bot/message/reply';
    
  var headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + accessToken,
  };
  
  var postDatas = {
    'replyToken': replyToken,
    'messages': [{
      'type': 'text',
      'text': makeReply(userMessage),
    }],
  };
  
  var options = {
    'headers': headers,
    'method': 'post',
    'payload': JSON.stringify(postDatas),
  };

  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}