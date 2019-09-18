import { Program } from "jelly-syntax";
import { toChain } from "./currentChain";
import { parseChar } from "./parseChar";
import { ParserState } from "./parserState";

export const parseProgram = (program: string): Program => {
  const state: ParserState = {
    lines: [],
    current: [],
    offset: 0,
    mode: {
      type: "neutral",
    },
  };

  for (let i = 0; i < program.length; i++) {
    parseChar(state, program[i]);
  }
  if (state.current.length !== 0) {
    state.lines.push(toChain(state.current));
  }
  return {
    links: state.lines,
  };
};
