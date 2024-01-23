import { Controls } from "components/controls";
import { Table } from "components/table";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function App() {
  const { rows, cols, robotPosition, cookiePosition } = useSelector(
    (state: RootState) => state.cookie
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Builder Activity Program</h1>
      <Table
        rows={rows}
        cols={cols}
        robotPosition={robotPosition}
        cookiePosition={cookiePosition}
      />
      <Controls />
    </div>
  );
}
