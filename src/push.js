var accessToken = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN');
var userId = PropertiesService.getScriptProperties().getProperty('MY_ID');
  
function pushMessage() {
  var url = 'https://api.line.me/v2/bot/message/push';
  var headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + accessToken,
  };

  var postDatas = {
    'to': userId,
    'messages': [{
      'type': 'text',
      'text': makePushMessage(),
    }]
  };
  
  var options = {
    'headers': headers,
    'method': 'post',
    'payload': JSON.stringify(postDatas)
  };
  var response = UrlFetchApp.fetch(url, options);
}