/**
 * Map of atoms. Holds its arity.
 */
export const atoms: Partial<Record<string, 0 | 1 | 2>> = {
  // nilad
  ɠ: 0,

  // monad
  V: 1,
  Ḳ: 1,

  // dyad
  ị: 2,
  "×": 2,
};
