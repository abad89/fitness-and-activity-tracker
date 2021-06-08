import { useState } from "react";
import { useHistory } from "react-router-dom";
function AddDayForm() {
    let history = useHistory();
  const [formData, setFormData] = useState({
    month: "",
    date: "",
    year: "",
    steps: "",
    sleepHours: "",
    sleepMinutes: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newDay = {
      month: formData.month,
      date: parseInt(formData.date),
      year: parseInt(formData.year),
      steps: parseInt(formData.steps),
      sleepHours: parseInt(formData.sleepHours),
      sleepMinutes: parseInt(formData.sleepMinutes),
    };
    fetch("http://localhost:3001/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newDay),
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
      .then(history.push("/"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Month
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Year
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Steps Taken
          <input
            type="text"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Time Slept (Hours)
          <input
            type="text"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Time Slept (Minutes)
          <input
            type="text"
            name="sleepMinutes"
            value={formData.sleepMinutes}
            onChange={handleChange}
          ></input>
          <input type="submit" value="Submit"></input>
        </label>
      </form>
    </div>
  );
}

export default AddDayForm;
