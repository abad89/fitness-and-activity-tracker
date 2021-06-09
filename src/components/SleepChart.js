import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

function SleepChart({ daysList }) {
  return (
    <div className="col-6">
      <h3>Sleep by Date</h3>
      <div>
        <LineChart
          width={500}
          height={250}
          data={daysList}
          style={{ margin: "auto" }}
        >
          <Line type="monotone" dataKey="sleep" stroke="black" />
          <CartesianGrid stroke="black" />
          <Tooltip />
          <XAxis dataKey="iso" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
}

export default SleepChart;
