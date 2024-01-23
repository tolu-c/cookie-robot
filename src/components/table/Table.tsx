import { useSelector } from "react-redux";
import { RootState } from "store";

export const Table = ({
  rows,
  cols,
  robotPosition,
  cookiePosition,
}: TTable) => {
  const { robotPosition: robot, cookiePosition: cookie } = useSelector(
    (state: RootState) => state.cookie
  );

  const isRobotCookieSamePosition =
    robot.row === cookie.row && robot.col === cookie.col;

  const renderTable = () => {
    const table = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const isRobot = i === robotPosition.row && j === robotPosition.col;
        const isCookie = i === cookiePosition.row && j === cookiePosition.col;

        row.push(
          <div
            key={`${i}-${j}`}
            className={`border border-gray-600 p-4 w-20 h-20 flex-none flex items-center justify-center ${
              isRobotCookieSamePosition ? "bg-green-700" : ""
            } ${
              isRobot
                ? "bg-blue-500 text-white"
                : isCookie
                ? "bg-yellow-500 text-white"
                : ""
            }`}
          >
            {isRobotCookieSamePosition
              ? "🤖🍪"
              : isRobot
              ? "🤖"
              : isCookie
              ? "🍪"
              : ""}
          </div>
        );
      }
      table.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return table;
  };
  return <div className="mt-8">{renderTable()}</div>;
};
