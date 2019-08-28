import { Chain } from "jelly-syntax";

export type ParserState = {
  /**
   * Already parsed chains.
   */
  chains: Chain[];
};
