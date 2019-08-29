import { Node } from "./node";

export interface Link extends Node {
  arity: 0 | 1 | 2;
}
