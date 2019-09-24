import { Quick, quickNodeType, quickTypes } from "jelly-syntax";
import { ParserState } from "../parserState";

/**
 * Set of quicks.
 */
export const quicks: Partial<Record<string, (state: ParserState) => void>> = {
  "/": state => {
    const lastLink = state.current[state.current.length - 1];
    if (lastLink == null) {
      // TODO: !?
      throw new Error("Parse Error");
    }
    if (lastLink.link != null) {
      // <dyad>/
      // TODO: <dyad><nilad>/
      if (lastLink.link.arity !== 2) {
        throw new Error("Parse Error");
      }
      const quick: Quick = {
        type: quickNodeType,
        quick: quickTypes.reduce,
        link: lastLink.link,
        arity: 1,
      };
      state.current.push({
        link: quick,
      });
      return;
    }
    throw new Error("TODO");
  },
};
