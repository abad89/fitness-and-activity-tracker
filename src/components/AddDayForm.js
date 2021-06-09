import { useState } from "react";
import { useHistory } from "react-router-dom";
function AddDayForm({ onAddDay }) {
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
      highlight: "no",
      iso: `${formData.year}-${formData.month}-${formData.date}`
    };
    fetch("https://fat-app-json-server.herokuapp.com/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newDay),
    })
      .then((r) => r.json())
      .then(onAddDay)
      .then(history.push("/"));
  }

  return (
    <div className="container border mt-5 w-25 mw-25 d-flex justify-content-evenly" style={{width: "25%"}}>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            placeholder="Month"
            type="number"
            name="month"
            min="1"
            max="12"
            value={formData.month}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <input
            placeholder="Date"
            type="number"
            name="date"
            min="1"
            max="31"
            value={formData.date}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <input
            placeholder="Year"
            type="number"
            name="year"
            min="2020"
            max="2022"
            value={formData.year}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <input
            placeholder="Steps Taken"
            type="number"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <input
            placeholder="Sleep (Hours)"
            type="number"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <input
            placeholder="Sleep (Minutes)"
            type="number"
            name="sleepMinutes"
            value={formData.sleepMinutes}
            onChange={handleChange}
          ></input>
          <div className="my-3 w-100 text-center">
            <input className="w-100 btn btn-primary" type="submit" value="Add"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDayForm;
