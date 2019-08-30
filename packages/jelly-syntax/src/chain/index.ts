import { chainNodeType } from "../const";
import { Link } from "../link";
import { Node } from "../node";

export interface Chain extends Node {
  type: typeof chainNodeType;
  links: Link[];
}
