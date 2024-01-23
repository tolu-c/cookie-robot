type TSteps = "moveLeft" | "moveRight" | "moveUp" | "moveDown";
s;
type AppState = TTable & {
  steps: TSteps[];
};

type AppAction = {
  type: "SET_POSITION" | "SET_STEPS";
  position: TPosition;
};

type TTable = {
  rows: number;
  cols: number;
  robotPosition: TPosition;
  cookiePosition: TPosition;
};

type TPosition = {
  row: number;
  col: number;
};

type TControl = {
  // onSubmit: (steps: TSteps[]) => void;
  onRunProgram: (steps: string[]) => void;
  onSetPosition: (position: TPosition) => void;
};
