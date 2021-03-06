import { stringLiteralType } from "../const";
import { Link } from "../link";

interface StringLiteralBase extends Link {
  arity: 0;
  type: typeof stringLiteralType;
}

export type StringLiteral = StringLiteralBase &
  (
    | {
        array: true;
        values: string[];
      }
    | {
        array: false;
        value: string;
      });
