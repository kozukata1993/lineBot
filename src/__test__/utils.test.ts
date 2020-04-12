import { getDateIndex, createDate, checkLanguage } from "../utils/utils";

describe("getDateIndex", () => {
  it("Should be 8", () => {
    expect(getDateIndex(new Date(), new Date(2020, 1, 1))).toBe(8);
  });

  it("Should be 1", () => {
    expect(getDateIndex(new Date(2020, 1, 1), new Date(2020, 1, 2))).toBe(1);
  });
});

describe("createDate", () => {
  it("Should be 2020/10/10", () => {
    expect(createDate("2020-10-10")).toStrictEqual(new Date(2020, 9, 10));
  });

  it("Should be 2020/1/1", () => {
    expect(createDate("2020-1-1")).toStrictEqual(new Date(2020, 0, 1));
  });
});

describe("checkLanguage", () => {
  it("Should be ['en', 'ja']", () => {
    expect(checkLanguage("Hello")).toStrictEqual(["en", "ja"]);
  });

  it("Should be ['ja', 'en']", () => {
    expect(checkLanguage("こんにちは")).toStrictEqual(["ja", "en"]);
  });
});
