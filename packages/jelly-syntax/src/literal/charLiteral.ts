import { charLiteralType } from "../const";
import { Link } from "../link";

export interface CharLiteral extends Link {
  type: typeof charLiteralType;
  arity: 0;
  value: string;
}
