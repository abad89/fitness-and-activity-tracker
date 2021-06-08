function DayCard({ day, onDeleteDay, onUpdateDay }) {
  const { id, month, date, year, steps, sleepHours, sleepMinutes, highlight } =
    day;
  function handleDeleteClick() {
    fetch(`https://fat-app-json-server.herokuapp.com/days/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteDay(day);
      });
  }

  function handleHighlightClick() {
    if (highlight === "no") {
      const updatedObj = {highlight: "yes"}
      fetch(`https://fat-app-json-server.herokuapp.com/days/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj)
    })
    .then((r) => r.json())
    .then(onUpdateDay)

    } else {
        const updatedObj = {highlight: "no"}
      fetch(`https://fat-app-json-server.herokuapp.com/days/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedObj)
        })
        .then((r) => r.json())
        .then(onUpdateDay)
    }
  }

  return (
    <div className={`col-3 hl-${highlight}`}>
      <h3>
        {month} {date}, {year}
      </h3>
      <p>Steps Taken: {steps}</p>
      <p>
        Time Slept: {sleepHours}h{sleepMinutes}m
      </p>
      <button onClick={handleHighlightClick}>Highlight Day</button>
      <button onClick={handleDeleteClick}>Delete Day</button>
    </div>
  );
}

export default DayCard;
