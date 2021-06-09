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
    <div className="col-6 border border-1 border-primary">
      <h3>Sleep by Date</h3>
      <div>
        <LineChart
          width={500}
          height={250}
          data={daysList}
          style={{ margin: "auto" }}
        >
          <Line type="monotone" dataKey="sleep" stroke="#0d6efd" />
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
