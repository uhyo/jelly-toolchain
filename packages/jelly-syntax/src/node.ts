import {
  atomNodeType,
  chainNodeType,
  quickNodeType,
  separateChainType,
} from "./const";
import { LiteralType } from "./literal";

type NodeType =
  | (typeof atomNodeType)
  | (typeof chainNodeType)
  | (typeof quickNodeType)
  | (typeof separateChainType)
  | LiteralType;

export interface Node {
  type: NodeType;
}
