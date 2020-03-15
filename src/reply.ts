import { createReply } from "./messages/reply";

export const reply = (e: any) => {
  const accessToken: string = PropertiesService.getScriptProperties().getProperty(
    "LINE_ACCESS_TOKEN"
  );
  const json = JSON.parse(e.postData.contents).events[0];
  const replyToken: string = json.replyToken;
  const userMessage: string = json.message.text;
  const url: string = "https://api.line.me/v2/bot/message/reply";

  const headers = {
    Authorization: "Bearer " + accessToken,
    "Content-Type": "application/json; charset=UTF-8",
  };

  const postDatas = {
    messages: [
      {
        text: createReply(userMessage),
        // text: `${userMessage}!!`,
        type: "text",
      },
    ],
    replyToken,
  };

  const options: any = {
    headers,
    method: "POST",
    payload: JSON.stringify(postDatas),
  };

  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput(
    JSON.stringify({ content: "post ok" })
  ).setMimeType(ContentService.MimeType.JSON);
};
