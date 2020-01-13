const makeReply = (userMessage: string): string => {
  const queryResult = (new Dialogflow(userMessage)).postQuery();
  const intent: string = queryResult.intent.displayName;
  const date: Date = createDate(queryResult.parameters.date);

  switch (intent) {
    case "trash":
      return makePushMessage();
    case "weather":
      return forecasts(date);
    default:
      const lngs: string[] = checkLanguage(userMessage);
      return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
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

const checkLanguage = (text: string): string[] => {
  const regexp = /[A-Za-z]+/;
  return (regexp.test(text) ? ["en", "ja"] : ["ja", "en"]);
};

const forecasts = (date: Date = new Date()): string => {
  let url: string = PropertiesService.getScriptProperties().getProperty("DARK_SKY_URL");
  const latitude: string = "35.41";
  const longitude: string = "139.45";
  const queryParams = "?lang=ja&units=si&exclude=currently,minutely,hourly,alerts,flags";
  url = `${url}${latitude},${longitude}${queryParams}`;

  const json = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  const dateIndex: number = getDateIndex(date);
  const forecast = json.daily.data[dateIndex];
  let result: string = "";

  if (dateIndex === 8) {
    result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}の天気はわからないよ。`;
  } else {
    result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}は${forecast.summary}\n最高気温は${forecast.temperatureMax}℃\n最低気温は${forecast.temperatureLow}℃\nの見込みです。`;
  }
  return result;
};

const getDateIndex = (date: Date) => {
  const today = new Date();
  const a = today.getFullYear() * 366 + (today.getMonth() + 1) * 31 + today.getDate();
  const b = date.getFullYear() * 366 + (date.getMonth() + 1) * 31 + date.getDate();
  return (b - a >= 0 && b - a <= 7) ? b - a : 8;
};

const createDate = (dateString: string = `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`) => {
  const regexp = /\d{4}-\d{1,2}-\d{1,2}/g;
  const tmpArray = dateString.match(regexp)[0].split("-");
  const dateArray: number[] = tmpArray.map((str) => +str);
  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
