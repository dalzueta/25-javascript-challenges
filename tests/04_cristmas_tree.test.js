describe("Cristmas Module should", () => {
  const sut = require("../exercises/04_cristmas_tree");
  it("return a christmas tree of 3 floors", () => {
    const expected = "__*__\n_***_\n*****\n__#__\n__#__";
    const result = sut(3);
    expect(result).toEqual(expected);
  });

  it("return a christmas tree of 1 floors", () => {
    const expected = "*\n#\n#";
    const result = sut(1);
    expect(result).toEqual(expected);
  });

  it("return a christmas tree of 5 floors", () => {
    const expected =
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____";
    const result = sut(5);
    expect(result).toEqual(expected);
  });
});
