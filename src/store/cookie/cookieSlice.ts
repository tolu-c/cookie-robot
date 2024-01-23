import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AppState = {
  rows: 4,
  cols: 4,
  robotPosition: {
    row: 0,
    col: 0,
  },
  cookiePosition: {
    row: 2,
    col: 2,
  },
  steps: [],
};

const cookieSlice = createSlice({
  name: "Find Cookie",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<{ position: TPosition }>) => {
      return { ...state, robotPosition: action.payload.position };
    },
    setSteps: (state, action: PayloadAction<{ steps: TSteps[] }>) => {
      return { ...state, steps: action.payload.steps };
    },
    moveRobot: (state) => {
      state.steps.forEach((step) => {
        switch (step) {
          case "moveRight":
            state.robotPosition.col += 1;
            break;
          case "moveLeft":
            state.robotPosition.col -= 1;
            break;
          case "moveDown":
            state.robotPosition.row += 1;
            break;
          case "moveUp":
            state.robotPosition.row -= 1;
            break;
          default:
            break;
        }
      });
      state.steps = [];
    },
  },
});

export const { setPosition, setSteps, moveRobot } = cookieSlice.actions;

export default cookieSlice.reducer;
