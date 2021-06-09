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
      <div className="">
        <LineChart
          width={400}
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
