import { DateTime } from "luxon"

function DayCard({ day, onDeleteDay, onUpdateDay }) {
  const { id, steps, sleepHours, sleepMinutes, highlight, iso } =
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
      const updatedObj = { highlight: "yes" };
      fetch(`https://fat-app-json-server.herokuapp.com/days/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
        .then((r) => r.json())
        .then(onUpdateDay);
    } else {
      const updatedObj = { highlight: "no" };
      fetch(`https://fat-app-json-server.herokuapp.com/days/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
        .then((r) => r.json())
        .then(onUpdateDay);
    }
  }

  const dt = DateTime.fromISO(`${iso}`)

  return (
    <div className="col-lg-4 col-sm-12">
      <div className={`border ${highlight==="yes"?"border-warning":"border-primary"} card text-black bg-white m-3 w-18rem`}>
        <div className={`card-header  ${highlight==="yes"?"bg-warning":"bg-primary"} text-white`}>
          {dt.toLocaleString(DateTime.DATE_FULL)}
        </div>
        <div className="card-body">
          <p className="card-text">Steps Taken: {steps.toLocaleString()}</p>
          <p className="card-text">
            Time Slept: {sleepHours}h{sleepMinutes}m
          </p>
          <div className="btn-group align-self-center">
            <button
              className={`btn ${highlight==="yes"?"btn-secondary":"btn-warning"} btn-sm`}
              onClick={handleHighlightClick}
            >
              Highlight
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayCard;
