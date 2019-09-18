import { Chain } from "jelly-syntax";
import { CurrentChain } from "./currentChain";

export type ParserMode =
  | {
      type: "neutral";
    }
  | {
      type: "string";
      values: string[];
    };

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
  /**
   * Current mode of parser.
   */
  mode: ParserMode;
};
