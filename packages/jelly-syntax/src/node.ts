import { atomNodeType, chainNodeType, quickNodeType } from "./const";

type NodeType =
  | (typeof atomNodeType)
  | (typeof chainNodeType)
  | (typeof quickNodeType);

export interface Node {
  type: NodeType;
}
