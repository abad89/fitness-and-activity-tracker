import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Chart({ daysList }) {
//   const daysList2 = [
//     {
//       id: 1,
//       month: "June",
//       date: 6,
//       year: 2021,
//       steps: 12651,
//       sleepHours: 4,
//       sleepMinutes: 58,
//       highlight: "yes",
//     },
//   ];
  return (
    <div>
      <LineChart
        width={720}
        height={240}
        data={daysList}
        style={{ margin: "auto" }}
      >
        <Line type="monotone" dataKey="steps" stroke="black" />
        <CartesianGrid stroke="black" />
        <XAxis dataKey="iso" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default Chart;
