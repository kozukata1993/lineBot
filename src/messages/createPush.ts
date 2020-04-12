export const createPush = (today: Date = new Date()): string => {
  // today: Date = new Date();
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
