function makeReply(userMessage) {
  if (userMessage == 'ゴミ' || userMessage == 'ごみ') {
    return makePushMessage();
  } else {
    switch (checkLanguage(userMessage)){
      case 'ja':
        enText = LanguageApp.translate(userMessage, 'ja', 'en');
        return enText;
      case 'en':
        jaText = LanguageApp.translate(userMessage, 'en', 'ja');
        return jaText;
    }
  }
}

function makePushMessage() {
  var today = new Date();
  var day = ['sun','mon','tue','wed','thu','fri','sat'][today.getDay()];
  var date = today.getDate();

  if (day == 'tue' || day == 'fri') {
    return '今日は燃えるゴミの日だよ';
  } else if (day == 'sat') {
    return '今日は資源ゴミの日だよ';
  } else if ((day == 'thu' && date >= 8 && date <= 14) || (day == 'thu' && date >= 22 && date <= 28)) {
    return '今日はペットボトルを捨てる日だよ';
  } else {
    return '今日はゴミを捨てる日じゃないよ';
  }
}

function checkLanguage(text) {
  var regexp = /[A-Za-z]+/;
  return (regexp.test(text) ? 'en' : 'ja');
}