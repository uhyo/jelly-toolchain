import { parseProgram } from "../parseProgram";

describe("parseProgram", () => {
  it("ɠḲV×/ị“Odd“Even”", () => {
    expect(parseProgram("ɠḲV×/ị“Odd“Even”")).toMatchSnapshot();
  });
  it("ɠċ”1", () => {
    expect(parseProgram("ɠċ”1")).toMatchSnapshot();
  });
});
