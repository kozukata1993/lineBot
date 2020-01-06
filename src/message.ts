const makeReply = (userMessage: string): string => {
  if (userMessage === "ゴミ" || userMessage === "ごみ") {
    return makePushMessage();
  } else {
    const df = new Dialogflow(userMessage);
    const intent: string = df.postQuery().intent.displayName;
    const date: Date = df.postQuery().parameters.date;

    switch (intent) {
      case "weather":
        return forecasts(date);
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

const forecasts = (date: Date = new Date()) => {
  const url: string = "http://weather.livedoor.com/forecast/webservice/json/v1?city=130010";
  const response = UrlFetchApp.fetch(url);
  const json = JSON.parse(response.getContentText());

  let i: number = 0;
  let result: string = "";

  const today: Date  = new Date();
  const tomorrow: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const dayAfterTomorrow: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);

  const todayString: string = Utilities.formatDate(today, "JST", "yyyyMMdd");
  const tomorrowString: string = Utilities.formatDate(tomorrow, "JST", "yyyyMMdd");
  const dayAfterTomorrowString: string = Utilities.formatDate(dayAfterTomorrow, "JST", "yyyyMMdd");
  switch (Utilities.formatDate(date, "JST", "yyyyMMdd")) {
    case todayString:
      i = 0;
      break;
    case tomorrowString:
      i = 1;
      break;
    case dayAfterTomorrowString:
      i = 2;
      break;
    default:
      result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}の天気はわからないよ`;
      return result;
  }

  result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}の天気は${json.forecasts[i].telop}
            最高気温は${json.forecasts[i].temperature.max}℃
            最低気温は${json.forecasts[i].temperature.min}℃です`;
  return result;
};

function test() {
  Logger.log(forecasts());
}
