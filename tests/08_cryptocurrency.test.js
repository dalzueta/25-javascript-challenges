describe("Cryptocurrency module should", () => {
  const sut = require("../exercises/08_cryptocurrency");

  it("return 16 of profit ", () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    const expected = 16;
    expect(sut(pricesBtc)).toBe(expected);
  });

  it("return 16 of profit ", () => {
    const pricesBtc = [39, 29, 18, 25, 34, 32, 5];
    const expected = 16;
    expect(sut(pricesBtc)).toBe(expected);
  });

  it("return 60 of profit", () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    const expected = 60;
    expect(sut(pricesEth)).toBe(expected);
  });

  it("return -1 when no profit is obtained", () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    const expected = -1;
    expect(sut(pricesDoge)).toBe(expected);
  });

  it("return -1 when no profit is obtained", () => {
    const pricesAda = [3, 3, 3, 3, 3];
    const expected = -1;
    expect(sut(pricesAda)).toBe(expected);
  });
});
