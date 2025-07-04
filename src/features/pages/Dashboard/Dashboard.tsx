import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./mockData";
import { QuizePerformanceDiagram } from ".";

type Props = {};
const size = {
  width: 200,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
function Dashboard({}: Props) {
  return (
    <>
      <h1>dsd</h1>
      <h1>sacsa</h1>
      <QuizePerformanceDiagram>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 35,
              arcLabelRadius: "60%",
              ...data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: "bold",
            },
          }}
          {...size}
        />
      </QuizePerformanceDiagram>
    </>
  );
}

export default Dashboard;
