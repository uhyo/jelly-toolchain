import {
  atomNodeType,
  chainNodeType,
  quickNodeType,
  separateChainType,
} from "./const";

type NodeType =
  | (typeof atomNodeType)
  | (typeof chainNodeType)
  | (typeof quickNodeType)
  | (typeof separateChainType);

export interface Node {
  type: NodeType;
}
