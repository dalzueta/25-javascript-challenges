describe("Elfo module should", () => {
  const sut = require("../exercices/02_elfo");

  it("return the requested gifts in the letter", () => {
    const letter = "bici coche balón _playstation bici coche peluche";
    const expected = { balón: 1, bici: 2, coche: 2, peluche: 1 };

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return the requested gifts in the letter", () => {
    const letter = "_bici _coche balón _playstation bici coche _peluche";
    const expected = { balón: 1, bici: 1, coche: 1 };

    const result = sut(letter);

    expect(result).toEqual(expected);
  });

  it("return empty if all the requested gifts were canceled", () => {
    const letter = "_bici _coche _balón _playstation __bici _coche _peluche";
    const expected = {};

    const result = sut(letter);

    expect(result).toEqual(expected);
  });
});
