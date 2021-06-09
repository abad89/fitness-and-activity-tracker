import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

function StepsChart({ daysList }) {
  return (
    <div className="col-6">
      <h3>Steps by Date</h3>
      <div className="border">
        <LineChart
          width={500}
          height={250}
          data={daysList}
          style={{ margin: "auto" }}
        >
          <Line type="monotone" dataKey="steps" stroke="black" />
          <CartesianGrid stroke="black" />
          <Tooltip />
          <XAxis dataKey="iso" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
}

export default StepsChart;
