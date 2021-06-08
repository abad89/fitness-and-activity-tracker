import { useEffect, useState } from "react";
import DayCard from "./DayCard";

function HomePage({ testProp2 }) {
  const [daysList, setDaysList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((r) => r.json())
      .then(setDaysList)
      .then(console.log(daysList))
  }, [])

  const daysItem = daysList.map((day) => (
    <DayCard key={day.id} day={day} />
  ))

  return (
    <div>
      <h1>Fitness and Activeness Tracker App</h1>
      {daysItem}
    </div>
  );
}

export default HomePage;
