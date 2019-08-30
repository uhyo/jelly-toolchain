import {
  Chain,
  chainNodeType,
  Link,
  SeparateChain,
  separateChainType,
} from "jelly-syntax";

export type CurrentChain = Array<
  | {
      link: null;
      separator: string;
      chain: Link[];
    }
  | {
      link: Link;
    }
>;

const toLink = (elm: CurrentChain[number]): Link => {
  if (elm.link) {
    return elm.link;
  }
  switch (elm.separator) {
    case "ø": {
      const result: SeparateChain = {
        type: separateChainType,
        arity: 0,
        links: elm.chain,
        swap: false,
      };
      return result;
    }
    case "µ": {
      const result: SeparateChain = {
        type: separateChainType,
        arity: 1,
        links: elm.chain,
        swap: false,
      };
      return result;
    }
    case "ð": {
      const result: SeparateChain = {
        type: separateChainType,
        arity: 2,
        links: elm.chain,
        swap: false,
      };
      return result;
    }
    case "ɓ": {
      const result: SeparateChain = {
        type: separateChainType,
        arity: 2,
        links: elm.chain,
        swap: true,
      };
      return result;
    }
    default: {
      throw new Error(`Unknown separator ${elm.separator}`);
    }
  }
};

export const toChain = (chain: CurrentChain): Chain => ({
  type: chainNodeType,
  links: chain.map(toLink),
});
