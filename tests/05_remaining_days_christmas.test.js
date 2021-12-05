describe("Remaining days christmas module should ", () => {
  const sut = require("../exercises/05_remaining_days_christmas");

  it("should return 24 when date is Dec 1 ", () => {
    const date = new Date("Dec 1, 2021");
    const expected = 24;

    expect(sut(date)).toBe(expected);
  });

  it("should return 1 when date is Dec 24 ", () => {
    const date = new Date("Dec 24, 2021 00:00:01");
    const expected = 1;

    expect(sut(date)).toBe(expected);
  });

  it("should return 1 when date is Dec 24 at the last second ", () => {
    const date = new Date("Dec 24, 2021 23:59:59");
    const expected = 1;

    expect(sut(date)).toBe(expected);
  });

  it("should return 5 when date is Dec 20 ", () => {
    const date = new Date("December 20, 2021 03:24:00");
    const expected = 5;

    expect(sut(date)).toBe(expected);
  });

  it("should return 0 when date is Dec 25 ", () => {
    const date = new Date("Dec 25, 2021");
    const expected = 0;

    expect(sut(date)).toBe(expected);
  });

  it("should return -1 when date is Dec 26 ", () => {
    const date = new Date("Dec 26, 2021");
    const expected = -1;

    expect(sut(date)).toBe(expected);
  });

  it("should return -6 when date is Dec 31 ", () => {
    const date = new Date("Dec 31, 2021");
    const expected = -6;

    expect(sut(date)).toBe(expected);
  });

  it("should return -7 when date is Jan 1 ", () => {
    const date = new Date("Jan 1, 2022 00:00:01");
    const expected = -7;

    expect(sut(date)).toBe(expected);
  });

  it("should return -7 when date is Jan 1 at the last second", () => {
    const date = new Date("Jan 1, 2022 23:59:59");
    const expected = -7;

    expect(sut(date)).toBe(expected);
  });
});
