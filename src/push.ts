const lineAccessToken: string = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
const userId: string = PropertiesService.getScriptProperties().getProperty("MY_ID");

const pushMessage = () => {
  const url: string = "https://api.line.me/v2/bot/message/push";
  const pushHeaders = {
    "Authorization": "Bearer " + lineAccessToken,
    "Content-Type": "application/json; charset=UTF-8",
  };

  const postDatas = {
    messages: [{
      text: makePushMessage(),
      type: "text",
    }],
    to: userId,
  };

  const options: any = {
    headers: pushHeaders,
    method: "post",
    payload: JSON.stringify(postDatas)
  };
  UrlFetchApp.fetch(url, options);
};
