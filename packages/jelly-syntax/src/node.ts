import { atomNodeType, chainNodeType } from "./const";

type NodeType = (typeof atomNodeType) | (typeof chainNodeType);

export interface Node {
  type: NodeType;
}
