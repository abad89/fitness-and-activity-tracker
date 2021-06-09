import { NavLink } from "react-router-dom";
import DayCard from "./DayCard";

function HomePage({ daysList, onUpdateDay, onDeleteDay }) {
  

  const daysItem = daysList.map((day) => (
    <DayCard
      onDeleteDay={onDeleteDay}
      onUpdateDay={onUpdateDay}
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
