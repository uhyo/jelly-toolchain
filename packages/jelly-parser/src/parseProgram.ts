import { parseChar } from "./parseChar";
import { ParserState } from "./parserState";

export const parseProgram = (program: string): void => {
  const state: ParserState = {
    lines: [],
    current: [],
    offset: 0,
  };

  for (let i = 0; i < program.length; i++) {
    parseChar(state, program[i]);
  }
  return;
};
