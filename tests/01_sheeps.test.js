describe("Sheeps exercice module should", () => {
  const sut = require("../exercises/01_sheeps.js");
  const ovejas = [
    { name: "Noa", color: "blue" },
    { name: "Euge", color: "red" },
    { name: "Navidad", color: "red" },
    { name: "Ki Na Ma", color: "red" },
  ];

  it("return the red sheeps with name that contains a and n", () => {
    const expected = [
      { color: "red", name: "Navidad" },
      { color: "red", name: "Ki Na Ma" },
    ];

    const result = sut(ovejas, ["a", "n"], "red");

    expect(result).toEqual(expected);
  });

  it("return the blue sheeps with name that contains o and a", () => {
    const expected = [{ name: "Noa", color: "blue" }];

    const result = sut(ovejas, ["a", "o"], "blue");

    expect(result).toEqual(expected);
  });

  it("return null array when not exists yellow sheeps", () => {
    const result = sut(ovejas, ["a", "o"], "yellow");
    expect(result).toEqual([]);
  });
});
