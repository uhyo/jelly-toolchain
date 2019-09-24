import { charLiteralType, stringLiteralType } from "../const";
import { CharLiteral } from "./charLiteral";
import { StringLiteral } from "./stringLiteral";

export type LiteralType = typeof stringLiteralType | typeof charLiteralType;

export { StringLiteral, CharLiteral };
