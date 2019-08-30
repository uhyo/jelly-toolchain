import { separateChainType } from "./const";
import { Link } from "./link";

export interface SeparateChain extends Link {
  type: typeof separateChainType;
  /**
   * Whether two arguments are swapped if this link is a dyad.
   */
  swap: boolean;
  links: Link[];
}
