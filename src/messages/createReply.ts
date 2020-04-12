import { checkLanguage, createDate, forecasts } from "../utils/utils";
import { Dialogflow } from "./dialogflow";
import { createPush } from "./createPush";

export const createReply = (userMessage: string): string => {
  const queryResult = new Dialogflow(userMessage).postQuery();
  const intent: string = queryResult.intent.displayName;
  const date: Date = createDate(queryResult.parameters.date);
  const lngs: string[] = checkLanguage(userMessage);
  // return LanguageApp.translate(userMessage, lngs[0], lngs[1]);

  switch (intent) {
    case "trash":
      return createPush();
    case "weather":
      return forecasts(date);
    default:
      return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
  }
};
