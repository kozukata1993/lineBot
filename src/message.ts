const makeReply = (userMessage: string): string => {
  if (userMessage === "ゴミ" || userMessage === "ごみ") {
    return makePushMessage();
  } else {
    const df = new Dialogflow(userMessage);
    const intent: string = df.postQuery().intent.displayName;
    switch (intent) {
      case "weather":
        return "天気は後で教えるよ";
      default:
        switch (checkLanguage(userMessage)) {
          case "ja":
            const enText: string = LanguageApp.translate(userMessage, "ja", "en");
            return enText;
          case "en":
            const jaText: string = LanguageApp.translate(userMessage, "en", "ja");
            return jaText;
        }
    }
  }
};

const makePushMessage = (): string => {
  const today: Date = new Date();
  const day: string = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][today.getDay()];
  const date: number = today.getDate();

  if (day === "tue" || day === "fri") {
    return "今日は燃えるゴミの日だよ";
  } else if (day === "sat") {
    return "今日は資源ゴミの日だよ";
  } else if ((day === "thu" && date >= 8 && date <= 14) || (day === "thu" && date >= 22 && date <= 28)) {
    return "今日はペットボトルを捨てる日だよ";
  } else {
    return "今日はゴミを捨てる日じゃないよ";
  }
};

const checkLanguage = (text: string): string => {
  const regexp = /[A-Za-z]+/;
  return (regexp.test(text) ? "en" : "ja");
};

const checkWeather = () => {
  const url: string = "http://weather.livedoor.com/forecast/webservice/json/v1?city=130010";
  const response = UrlFetchApp.fetch(url);
  const json = JSON.parse(response.getContentText());
  return json;
};

function test() {
  const df = new Dialogflow("今日の天気教えて");
  Logger.log(df.postQuery().parameters.date);
}
