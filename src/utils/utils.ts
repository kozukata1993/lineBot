export const forecasts = (date: Date = new Date()): string => {
  let url: string = PropertiesService.getScriptProperties().getProperty(
    "DARK_SKY_URL"
  );
  const latitude: string = "35.41";
  const longitude: string = "139.45";
  const queryParams =
    "?lang=ja&units=si&exclude=currently,minutely,hourly,alerts,flags";
  url = `${url}${latitude},${longitude}${queryParams}`;

  const json = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  const dateIndex: number = getDateIndex(date);
  const forecast = json.daily.data[dateIndex];
  let result: string = "";

  if (dateIndex === 8) {
    result = `${Utilities.formatDate(
      date,
      "JST",
      "MM/dd(E)"
    )}の天気はわからないよ。`;
  } else {
    result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}は${
      forecast.summary
    }\n最高気温は${forecast.temperatureMax}℃\n最低気温は${
      forecast.temperatureLow
    }℃\nの見込みです。`;
  }
  return result;
};

export const getDateIndex = (date: Date) => {
  const today = new Date();
  const a =
    today.getFullYear() * 366 + (today.getMonth() + 1) * 31 + today.getDate();
  const b =
    date.getFullYear() * 366 + (date.getMonth() + 1) * 31 + date.getDate();
  return b - a >= 0 && b - a <= 7 ? b - a : 8;
};

export const createDate = (
  dateString: string = `${new Date().getFullYear()}-${new Date().getMonth() +
    1}-${new Date().getDate()}`
) => {
  const regexp = /\d{4}-\d{1,2}-\d{1,2}/g;
  const tmpArray = dateString.match(regexp)[0].split("-");
  const dateArray: number[] = tmpArray.map(str => +str);
  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};

export const checkLanguage = (text: string): string[] => {
  return /[A-Za-z]+/.test(text) ? ["en", "ja"] : ["ja", "en"];
};
