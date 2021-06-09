import { useState } from "react";
import { NavLink } from "react-router-dom";
import DayCard from "./DayCard";
import StepsChart from "./StepsChart";
import SleepChart from "./SleepChart";

function HomePage({ daysList, onUpdateDay, onDeleteDay }) {
  const daysItem = daysList.map((day) => (
    <DayCard
      onDeleteDay={onDeleteDay}
      onUpdateDay={onUpdateDay}
      key={day.id}
      day={day}
    />
  ));

  const [hideSleepChart, setHideSleepChart] = useState(true);
  const [hideStepsChart, setHideStepsChart] = useState(true);

  function handleSleepClick() {
    setHideSleepChart((hideSleepChart) => !hideSleepChart);
  }
  function handleStepsClick() {
    setHideStepsChart((hideStepsChart) => !hideStepsChart);
  }

  return (
    <div className="container text-center">
      <h1 className="display-2">Fitness and Activeness Tracker App</h1>
      <div className="d-flex  justify-content-evenly mw-100">
        <button
          onClick={handleStepsClick}
          type="button"
          className={`btn btn-sm ${hideStepsChart?`btn-secondary`:`btn-warning`} m-5`}
        >
          {hideStepsChart ? "Hide" : "Show"} Steps Chart
        </button>
        <NavLink to="/add">
          <button className="btn btn-success btn-lg my-5 ">Add Day</button>
        </NavLink>
        <button
          onClick={handleSleepClick}
          className={`btn btn-sm ${hideSleepChart?`btn-secondary`:`btn-warning`} m-5`}
        >
          {hideSleepChart ? "Hide" : "Show"} Sleep Amount Chart
        </button>
      </div>
      <div className="d-flex mw-100 justify-content-evenly">
        <div className="container d-flex justify-content-evenly row mb-5">
          {hideStepsChart ? <StepsChart daysList={daysList} /> : null}
          {hideSleepChart ? <SleepChart daysList={daysList} /> : null}
        </div>
      </div>
      <div className="row">{daysItem}</div>
    </div>
  );
}

export default HomePage;
