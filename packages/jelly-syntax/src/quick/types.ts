export const quickTypes = {
  reduce: "reduce",
} as const;

export type QuickType = (typeof quickTypes)[keyof typeof quickTypes];
