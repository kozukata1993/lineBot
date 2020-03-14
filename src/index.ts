import { reply } from "./reply";
import { pushMessage } from "./push";
import { forecasts } from "./utils/utils";

global.doPost = (e: any): void => {
  reply(e);
};

global.pushNotice = () => {
  pushMessage();
};

global.testFunction = () => {
  forecasts();
};
