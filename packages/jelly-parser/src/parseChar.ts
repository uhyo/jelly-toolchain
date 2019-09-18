import { Atom, atomNodeType } from "jelly-syntax";
import { atoms } from "./atom";
import { ParserState } from "./parserState";
import { quicks } from "./quick";

const addAtom = (state: ParserState, char: string, arity: 0 | 1 | 2): void => {
  const { offset, current } = state;
  const atom: Atom = {
    type: atomNodeType,
    arity,
    name: char,
  };

  if (offset !== 0) {
    const last = current[offset - 1];
    if (last.link === null) {
      last.chain.push(atom);
      return;
    }
  }
  current.push({ link: atom });
};

export const parseChar = (state: ParserState, char: string): void => {
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
};