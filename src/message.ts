import { checkLanguage, createDate, forecasts } from "./utils/utils";
import { Dialogflow } from "./dialogflow";

export const createReply = (userMessage: string): string => {
  const queryResult = new Dialogflow(userMessage).postQuery();
  const intent: string = queryResult.intent.displayName;
  const date: Date = createDate(queryResult.parameters.date);
  const lngs: string[] = checkLanguage(userMessage);
  // return LanguageApp.translate(userMessage, lngs[0], lngs[1]);

  switch (intent) {
    case "trash":
      return createPushMessage();
    case "weather":
      return forecasts(date);
    default:
      return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
  }
};

export const createPushMessage = (): string => {
  const today: Date = new Date();
  const day: string = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
    today.getDay()
  ];
  const date: number = today.getDate();

  if (day === "tue" || day === "fri") {
    return "今日は燃えるゴミの日だよ";
  } else if (day === "sat") {
    return "今日は資源ゴミの日だよ";
  } else if (
    (day === "thu" && date >= 8 && date <= 14) ||
    (day === "thu" && date >= 22 && date <= 28)
  ) {
    return "今日はペットボトルを捨てる日だよ";
  } else {
    return "今日はゴミを捨てる日じゃないよ";
  }
};
