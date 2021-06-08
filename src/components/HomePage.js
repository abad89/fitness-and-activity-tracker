import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DayCard from "./DayCard";

function HomePage() {
  const [daysList, setDaysList] = useState([]);

  useEffect(() => {
    fetch("https://fat-app-json-server.herokuapp.com/days")
      .then((r) => r.json())
      .then(setDaysList);
  }, []);

  function handleDeleteDay(dayToDelete) {
    const updatedDaysList = daysList.filter((day) => day.id !== dayToDelete.id);
    setDaysList(updatedDaysList);
  }

  function handleUpdateDay(dayToUpdate) {
    const updatedDaysList = daysList.map((day) =>
      day.id === dayToUpdate.id ? dayToUpdate : day
    );
    setDaysList(updatedDaysList);
  }

  const daysItem = daysList.map((day) => (
    <DayCard
      onDeleteDay={handleDeleteDay}
      onUpdateDay={handleUpdateDay}
      key={day.id}
      day={day}
    />
  ));

  return (
    <div className="container">
      <h1>Fitness and Activeness Tracker App</h1>
      <NavLink to="/add">
        <button>Add a new Day</button>
      </NavLink>
      <div className="row">{daysItem}</div>
    </div>
  );
}

export default HomePage;
