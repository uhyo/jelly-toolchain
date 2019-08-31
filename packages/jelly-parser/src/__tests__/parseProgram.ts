import { parseProgram } from "../parseProgram";

describe("parseProgram", () => {
  it("ɠḲV×/ị“Odd“Even”", () => {
    expect(parseProgram("ɠḲV×/ị“Odd“Even”")).toMatchSnapshot();
  });
});
