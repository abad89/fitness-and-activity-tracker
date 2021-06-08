function DayCard({ day, onDeleteDay }) {
  const { id, month, date, year, steps, sleepHours, sleepMinutes } = day;
  function handleDeleteClick() {
    fetch(`http://localhost:3001/days/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteDay(day);
      });
  }
  return (
    <div className="daycard">
      <h2>Test (DayCard)</h2>
      <h3>
        {month} {date}, {year}
      </h3>
      <p>Steps Taken: {steps}</p>
      <p>
        Time Slept: {sleepHours}h{sleepMinutes}m
      </p>
      <button>Highlight Day</button>
      <button onClick={handleDeleteClick}>Delete Day</button>
    </div>
  );
}

export default DayCard;
