export interface Props {
  id: number;
  name: string;
}

export interface Emits {
  (event: "incrementPoint", id: number): void;
}
// or
export type NewEmitsType = {
  incrementPoint: [id: number];
};
