import { createPush } from "../src/messages/push";

describe(createPush, () => {
  it("Combustible garbage", () => {
    expect(createPush(new Date(2020, 0, 7))).toBe("今日は燃えるゴミの日だよ");
  });

  it("Plastic bottle", () => {
    expect(createPush(new Date(2020, 0, 9))).toBe(
      "今日はペットボトルを捨てる日だよ"
    );
  });

  it("Recyclable resources", () => {
    expect(createPush(new Date(2020, 0, 11))).toBe("今日は資源ゴミの日だよ");
  });

  it("No items are collected", () => {
    expect(createPush(new Date(2020, 0, 13))).toBe(
      "今日はゴミを捨てる日じゃないよ"
    );
  });
});
