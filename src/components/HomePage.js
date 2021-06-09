import { NavLink } from "react-router-dom";
import DayCard from "./DayCard";
import Chart from "./Chart"

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
      <h1 className="display-2">Fitness and Activeness Tracker App</h1>
      <NavLink to="/add">
        <button className="btn btn-success btn-lg my-5">Add Day</button>
      </NavLink>
      <div className="container justify-content-center">
        <Chart daysList={daysList}/>
      </div>
      <div className="row">{daysItem}</div>
    </div>
  );
}

export default HomePage;
