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
    <div className="container text-center">
      <h1>Fitness and Activeness Tracker App</h1>
      <NavLink to="/add">
        <button className="btn btn-success btn-lg my-5">Add a new Day</button>
      </NavLink>
      <div className="row">{daysItem}</div>
    </div>
  );
}

export default HomePage;
