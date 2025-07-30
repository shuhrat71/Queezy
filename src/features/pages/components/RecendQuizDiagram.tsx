import type { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 400, color: "#FF8FA2" },
  { label: "Group B", value: 500, color: "#FFB3C0" },
];

const sizing = {
  width: 100,
  height: 100,
  hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: "100%",
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
          border: "none",
          stroke: "transparent",
        },
      }}
      {...sizing}
    />
  );
}
