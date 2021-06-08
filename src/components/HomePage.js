import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import DayCard from "./DayCard";

function HomePage({ testProp2 }) {
  const [daysList, setDaysList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((r) => r.json())
      .then(setDaysList)
  }, [])

  const daysItem = daysList.map((day) => (
    <DayCard key={day.id} day={day} />
  ))

  return (
    <div>
      <h1>Fitness and Activeness Tracker App</h1>
      <NavLink to="/add"><button>Add a new Day</button></NavLink>
      {daysItem}
    </div>
  );
}

export default HomePage;
