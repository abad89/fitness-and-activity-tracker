import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function SleepChart({ daysList }) {
  // const sleep = `${sleepHours}.${sleepMinutes}`
  return (
    <div>
      <h3>Sleep by Day</h3>
      <LineChart
        width={720}
        height={240}
        data={daysList}
        style={{ margin: "auto" }}
      >
        <Line type="monotone" dataKey="sleepHours" stroke="black" />
        <CartesianGrid stroke="black" />
        <XAxis dataKey="iso" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default SleepChart;
