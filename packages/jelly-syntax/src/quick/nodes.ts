import { quickNodeType } from "../const";
import { Link } from "../link";
import { Clean } from "../util";
import { QuickType } from "./index";

export interface QuickNodeDefinitions {
  reduce: {
    link: Link;
  };
}

interface QuickBase<K extends QuickType> extends Link {
  type: typeof quickNodeType;
  quick: K;
}
export type Quick = Distribute<QuickType>;

type Distribute<K extends QuickType> = K extends QuickType
  ? Clean<QuickBase<K> & QuickNodeDefinitions[K]>
  : never;
