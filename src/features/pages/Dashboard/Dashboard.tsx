import { CelendarBox, DashboardWrapper, RecentQuizBox } from ".";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import VictorLine7 from "../../../assets/img/Vector 7.svg";
import VictorLine8 from "../../../assets/img/Vector 8.svg";
import PieChartWithCustomizedLabel from "../components/RecendQuizDiagram";
type Props = {};
const data = [
  { id: 0, value: 70, label: "Music", color: "#6C4CF1" },
  { id: 1, value: 17, label: "Sports", color: "#FF8CA3" },
  { id: 2, value: 13, label: "Math", color: "#CBDCFF" },
];
function Dashboard({}: Props) {
  return (
    <>
      <DashboardWrapper>
        <Card
          sx={{
            maxWidth: 604,
            borderRadius: "32px",
            backgroundColor: "#fff",
            border: "2px solid #F4F4F6",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center" fontWeight={700} mb={2}>
              Quiz Performance
            </Typography>

            <PieChart
              series={[
                {
                  data,
                  arcLabel: (item: any) => `${item.value}%`,
                  arcLabelMinAngle: 10,
                },
              ]}
              width={320}
              height={250}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />

            <Stack spacing={1} mt={2}>
              {data.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  px={1}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: item.color,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="#2f2f2f"
                    >
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color={item.color}
                  >
                    {item.value}%
                  </Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <Box
          maxWidth={580}
          width="100%"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <RecentQuizBox>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Recent Quizzes
            </Typography>
            <Box className="statisticsMathQuiz">
              <Box width={"100%"}>
                <img src={VictorLine7} alt="" />
                <img src={VictorLine8} alt="" />

                <Typography variant="h5" fontWeight={600}>
                  Statistics Math Quiz
                </Typography>
                <Typography variant="body2">Math • 12 Quizzes</Typography>
              </Box>
              <PieChartWithCustomizedLabel />
            </Box>
          </RecentQuizBox>
          <CelendarBox>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateCalendar", "DateCalendar", "DateCalendar"]}
              >
                <DemoItem>
                  <DateCalendar
                    defaultValue={dayjs()}
                    views={["year", "month", "day"]}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </CelendarBox>
        </Box>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
