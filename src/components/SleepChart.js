import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SleepChart({ daysList }) {
  return (
    <div className="mx-1 col-xl-5 col-xs-12 border border-3 border-primary ">
        <h3>Sleep Amount by Date</h3>
      <div  style={{height: "200px"}}>
        <ResponsiveContainer>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SleepChart;
