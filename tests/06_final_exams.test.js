describe("Final Exams Module should ", () => {
  const sut = require("../exercises/06_final_exams");

  it("return nums that sum 10 when values is [3, 5, 7, 2]", () => {
    const numbers = [3, 5, 7, 2];
    const result = 10;
    const resultExpected = [3, 7];

    expect(sut(numbers, result)).toEqual(resultExpected);
  });

  it("return nums that sum 10 when values is [-3, -2, 7, -5]", () => {
    const numbers = [-3, -2, 7, -5];
    const result = 10;
    const resultExpected = null;

    expect(sut(numbers, result)).toEqual(resultExpected);
  });

  it("return nums that sum 4 when values is [2, 2, 3, 1]", () => {
    const numbers = [2, 2, 3, 1];
    const result = 4;
    const resultExpected = [2, 2];

    expect(sut(numbers, result)).toEqual(resultExpected);
  });

  it("return nums that sum 8 when values is [6, 7, 1, 2]", () => {
    const numbers = [6, 7, 1, 2];
    const result = 8;
    const resultExpected = [6, 2];

    expect(sut(numbers, result)).toEqual(resultExpected);
  });

  it("return nums that sum 6 when values is [0, 2, 2, 3, -1, 1, 5]", () => {
    const numbers = [0, 2, 2, 3, -1, 1, 5];
    const result = 6;
    const resultExpected = [1, 5];

    expect(sut(numbers, result)).toEqual(resultExpected);
  });
});
