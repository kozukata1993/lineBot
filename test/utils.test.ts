import { getDateIndex } from "../src/utils/utils";

describe("getDateIndex", () => {
  it("should be 8", () => {
    expect(getDateIndex(new Date(2020, 1, 1))).toBe(8);
  });
});
