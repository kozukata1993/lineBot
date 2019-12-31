const accessToken: string = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN');
const userId: string = PropertiesService.getScriptProperties().getProperty('MY_ID');
  
const pushMessage = () => {
  const url: string = 'https://api.line.me/v2/bot/message/push';
  const headers: any = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + accessToken,
  };

  const postDatas = {
    'to': userId,
    'messages': [{
      'type': 'text',
      'text': makePushMessage(),
    }]
  };
  
  const options: any = {
    'headers': headers,
    'method': 'post',
    'payload': JSON.stringify(postDatas)
  };
  UrlFetchApp.fetch(url, options);
};