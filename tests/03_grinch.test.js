describe("Grinch module should ", () => {
  const sut = require("../exercises/03_grinch");

  it("return true when the letter is well formatted", () => {
    const letter = "bici coche (balón) bici coche peluche";
    const expected = true;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return true when the letter is well formatted", () => {
    const letter = "(muñeca) consola bici";
    const expected = true;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return false when the letter is bad formatted", () => {
    const letter = "bici coche (balón bici coche";
    const expected = false;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return false when the letter is bad formatted", () => {
    const letter = "peluche (bici [coche) bici coche balón";
    const expected = false;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return false when the letter is bad formatted", () => {
    const letter = "(peluche {) bici";
    const expected = false;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return false when the letter is bad formatted", () => {
    const letter = "() bici";
    const expected = false;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });
  it("return false when the letter is bad formatted", () => {
    const letter = "(()) bici";
    const expected = false;

    const result = sut(letter);

    expect(result).toEqual(expected);
  });
});
