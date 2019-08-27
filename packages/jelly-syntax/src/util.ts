export type Clean<T> = { [P in keyof T]: T[P] };
