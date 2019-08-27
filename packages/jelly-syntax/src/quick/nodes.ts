import { QuickType } from "./index";
import { Link } from "../link";
import { quickNodeType } from "../const";
import { Clean } from "../util";
import { Node } from "../node";

export interface QuickNodeDefinitions {
  reduce: {
    link: Link;
  };
}

interface QuickBase<K extends QuickType> extends Node {
  type: typeof quickNodeType;
  quick: K;
}
export type Quick = Distribute<QuickType>;

type Distribute<K extends QuickType> = K extends QuickType
  ? Clean<QuickBase<K> & QuickNodeDefinitions[K]>
  : never;
