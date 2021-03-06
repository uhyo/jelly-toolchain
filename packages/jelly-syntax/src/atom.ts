import { atomNodeType } from "./const";
import { Link } from "./link";
import { Node } from "./node";

export interface Atom extends Link {
  type: typeof atomNodeType;
  name: string;
}

export const isAtom = (node: Node): node is Atom => node.type === atomNodeType;
