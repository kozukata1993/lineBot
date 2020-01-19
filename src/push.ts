const accessToken: string = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
const userId: string = PropertiesService.getScriptProperties().getProperty("MY_ID");

const pushMessage = () => {
  const url: string = "https://api.line.me/v2/bot/message/push";
  const headers = {
    "Authorization": "Bearer " + accessToken,
    "Content-Type": "application/json; charset=UTF-8",
  };

  const postDatas = {
    messages: [{
      text: createPushMessage(),
      type: "text",
    }],
    to: userId,
  };

  const options: any = {
    headers,
    method: "POST",
    payload: JSON.stringify(postDatas),
  };
  UrlFetchApp.fetch(url, options);
};
