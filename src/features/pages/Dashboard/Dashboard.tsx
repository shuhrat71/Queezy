import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./mockData";
import { QuizePerformanceDiagram } from ".";

type Props = {};
const size = {
  width: 300,
  height: 300,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
function Dashboard({}: Props) {
  return (
    <>
      <QuizePerformanceDiagram>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 45,
              arcLabelRadius: "60%",

              ...data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "#fff",
              fontSize: "1.2rem",
              fontWeight: 700,
            },
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "flex-start",
            color: "#fff",
          }}
          {...size}
        />
      </QuizePerformanceDiagram>
    </>
  );
}

export default Dashboard;
