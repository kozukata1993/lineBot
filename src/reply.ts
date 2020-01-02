const doPost = (e: any) => {
  const lineAccessToken: string = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
  const json = JSON.parse(e.postData.contents).events[0];
  const lineReplyToken: string = json.replyToken;
  const userMessage: string = json.message.text;
  const url: string = "https://api.line.me/v2/bot/message/reply";

  const replyHeaders = {
    "Authorization": "Bearer " + lineAccessToken,
    "Content-Type": "application/json; charset=UTF-8",
  };

  const postDatas = {
    messages: [{
      text: makeReply(userMessage),
      // text: "Success!",
      type: "text",
    }],
    replyToken: lineReplyToken,
  };

  const options: any = {
    headers: replyHeaders,
    method: "post",
    payload: JSON.stringify(postDatas),
  };

  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput(JSON.stringify({content: "post ok"}))
  .setMimeType(ContentService.MimeType.JSON);
};
