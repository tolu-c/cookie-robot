import { useState } from "react";
import { useDispatch } from "react-redux";
import { moveRobot, setSteps } from "store/cookie/cookieSlice";

export const Controls = () => {
  // const [position, setPosition] = useState<{ row: number; col: number }>({
  //   row: 0,
  //   col: 0,
  // });
  const dispatch = useDispatch();

  const [selectedSteps, setSelectedSteps] = useState<TSteps[]>([]);
  const [currentStep, setCurrentStep] = useState<TSteps | null>(null);

  // const handleSetPosition = () => {
  //   onSetPosition(position);
  // };

  const handleAddStep = () => {
    if (currentStep) {
      setSelectedSteps([...selectedSteps, currentStep]);
      setCurrentStep(null);
    }
  };

  const handleRunProgram = () => {
    dispatch(
      setSteps({
        steps: selectedSteps,
      })
    );
    // onRunProgram(selectedSteps);
    dispatch(moveRobot());
  };

  const clearSteps = () => setSelectedSteps([]);

  return (
    <div className="mt-4">
      {/* <div className="flex mb-4">
        <label className="mr-2">Set Position:</label>
        <input
          type="number"
          value={position.row}
          onChange={(e) =>
            setPosition({ ...position, row: parseInt(e.target.value) })
          }
          className="border border-gray-300 p-2 mr-2"
        />
        <input
          type="number"
          value={position.col}
          onChange={(e) =>
            setPosition({ ...position, col: parseInt(e.target.value) })
          }
          className="border border-gray-300 p-2 mr-2"
        />
        <button
          onClick={handleSetPosition}
          className="bg-blue-500 text-white p-2 mr-2"
        >
          Set Position
        </button>
      </div> */}

      <div className="mb-4">
        <label className="mr-2">Select Steps:</label>
        <select
          value={currentStep || ""}
          onChange={(e) => setCurrentStep(e.target.value as TSteps)}
          className="border border-gray-300 p-2 mr-2"
        >
          <option value="">Select Step</option>
          <option value="moveRight">Move Right</option>
          <option value="moveLeft">Move Left</option>
          <option value="moveUp">Move Up</option>
          <option value="moveDown">Move Down</option>
        </select>
        <button
          onClick={handleAddStep}
          className="bg-blue-500 text-white p-2 mr-2"
        >
          Add Step
        </button>
        <div>Selected Steps: {selectedSteps.join(", ")}</div>
        <div className="mt-2">
          <button
            type="button"
            className="bg-amber-600 px-4 py-2 text-white"
            onClick={clearSteps}
          >
            Clear steps
          </button>
        </div>
      </div>

      <button onClick={handleRunProgram} className="bg-blue-500 text-white p-2">
        Run Program
      </button>
    </div>
  );
};
