import {
  Atom,
  atomNodeType,
  Link,
  StringLiteral,
  stringLiteralType,
} from "jelly-syntax";
import { atoms } from "./atom";
import { ParserState } from "./parserState";
import { quicks } from "./quick";

const addLink = (state: ParserState, link: Link): void => {
  const { offset, current } = state;

  if (offset !== 0) {
    const last = current[offset - 1];
    if (last.link === null) {
      last.chain.push(link);
      return;
    }
  }
  current.push({ link });
};

const addAtom = (state: ParserState, char: string, arity: 0 | 1 | 2): void => {
  const atom: Atom = {
    type: atomNodeType,
    arity,
    name: char,
  };

  addLink(state, atom);
};

export const parseChar = (state: ParserState, char: string): void => {
  const { mode } = state;
  switch (mode.type) {
    case "string": {
      // parsing string literal
      if (char === "”") {
        // end parsing
        const link: StringLiteral =
          mode.values.length > 1
            ? {
                type: stringLiteralType,
                arity: 0,
                array: true,
                values: mode.values,
              }
            : {
                type: stringLiteralType,
                arity: 0,
                array: false,
                value: mode.values[0],
              };
        addLink(state, link);
        state.mode = {
          type: "neutral",
        };
        return;
      }
      if (char === "“") {
        // move to next element of string array
        mode.values.push("");
        return;
      }
      const { values } = mode;
      // TODO: do not parse char not in code point
      values[values.length - 1] += char;
      return;
    }
    case "neutral": {
      switch (char) {
        case "“": {
          // beginning of string literal
          state.mode = {
            type: "string",
            values: [""],
          };
          return;
        }
      }
      const atomArity = atoms[char];
      if (atomArity !== undefined) {
        addAtom(state, char, atomArity);
        return;
      }
      const quickFunc = quicks[char];
      if (quickFunc !== undefined) {
        quickFunc(state);
      }
      return;
    }
  }
  return;
};
