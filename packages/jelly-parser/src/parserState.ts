import { Chain, Link } from "jelly-syntax";

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
  current: (Link[] | Link)[];
  /**
   * Next offset of current chain.
   */
  offset: number;
};
