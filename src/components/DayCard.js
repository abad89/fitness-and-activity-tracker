function DayCard({ day }) {
    const {month, date, year, steps, sleepHours, sleepMinutes} = day
  return (
    <div className="daycard">
      <h2>Test (DayCard)</h2>
      <h3>{month} {date}, {year}</h3>
      <p>Steps Taken: {steps}</p>
      <p>Time Slept: {sleepHours}h{sleepMinutes}m</p>
    </div>
  );
}

export default DayCard;
