import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function StepsChart({ daysList }) {
  return (
    <div className="mx-1 col-5 border border-3 border-primary">
      <h3>Steps by Date</h3>
        <LineChart
          width={400}
          height={250}
          data={daysList}
          style={{ margin: "auto" }}
        >
          <Line type="monotone" dataKey="steps" stroke="#0d6efd" />
          <CartesianGrid stroke="black" />
          <Tooltip />
          <XAxis dataKey="iso" />
          <YAxis />
        </LineChart>
      </div>
  );
}

export default StepsChart;
