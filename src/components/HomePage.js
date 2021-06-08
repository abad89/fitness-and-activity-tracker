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

  return (
    <div>
      <h1>Fitness and Activeness Tracker App</h1>
      <DayCard testProp3={testProp2} />
    </div>
  );
}

export default HomePage;
