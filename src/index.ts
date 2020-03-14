import { reply } from "./reply";
import { pushMessage } from "./push";

global.doPost = (e: any): void => {
  reply(e);
};

global.pushNotice = () => {
  pushMessage();
};
