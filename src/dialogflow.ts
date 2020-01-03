const scriptProperties = PropertiesService.getScriptProperties();
const dfUrlFormat: string = scriptProperties.getProperty("DF_URL_FORMAT");

class Dialogflow {
  private sessionID: string;
  private message: string;

  public constructor(message: string) {
    this.sessionID = Math.random().toString(32).substring(2);
    this.message = message;
  }

  public postQuery() {
    const body: any = {
      queryInput: {
        text: {
          languageCode: "ja",
          text: this.message,
        },
      },
      queryParams: {
        timeZone: "Asia/Tokyo",
      },
    };
    const options: any = {
      contentType: "application/json; charset=utf-8",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
      method: "POST",
      payload: JSON.stringify(body),
    };

    const response = UrlFetchApp.fetch(dfUrlFormat.replace(/{{sessionID}}/g, this.sessionID), options);
    return JSON.parse(response.getContentText()).queryResult;
  }
}

const getAccessToken = () => {
  const jsonKey = JSON.parse(scriptProperties.getProperty("GOOGLE_APPLICATION_CREDENTIALS"));
  const serverToken = new GSApp.init(
    jsonKey.private_key,
    ["https://www.googleapis.com/auth/cloud-platform"],
    jsonKey.client_email,
  );
  const tokens = serverToken.addUser(jsonKey.client_email).requestToken().getTokens();
  return tokens[jsonKey.client_email].token;
};
