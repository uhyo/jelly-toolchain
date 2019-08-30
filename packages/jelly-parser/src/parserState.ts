import { Chain } from "jelly-syntax";
import { CurrentChain } from "./currentChain";

export const parserMode = {
  neutral: "neutral",
} as const;

export type ParserState = {
  /**
   * Already parsed lines.
   */
  lines: Chain[];
  /**
   * currently parsed chain.
   */
  current: CurrentChain;
  /**
   * Next offset of current chain.
   */
  offset: number;
};
