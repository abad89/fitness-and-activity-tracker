import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function SleepChart({ daysList }) {
  return (
    <div className="mx-1 col-5 border border-3 border-primary">
      <h3>Sleep Amount by Date</h3>
      <LineChart
        width={400}
        height={250}
        data={daysList}
        style={{ margin: "auto" }}
      >
        <Line type="monotone" dataKey="sleep" stroke="#f47c3c" />
        <CartesianGrid stroke="black" />
        <Tooltip />
        <XAxis dataKey="iso" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default SleepChart;
