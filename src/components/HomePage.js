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
      <div className="my-5">
        <button
          onClick={handleStepsClick}
          type="button"
          className={`mx-2 btn ${
            hideStepsChart ? `btn-secondary` : `btn-warning`
          } col-3`}
        >
          {hideStepsChart ? "Hide" : "Show"} Steps Chart
        </button>
        <NavLink to="/add">
          <button className="mx-2 btn btn-success col-3">Add Day</button>
        </NavLink>
        <button
          onClick={handleSleepClick}
          className={`mx-2 btn ${
            hideSleepChart ? `btn-secondary` : `btn-warning`
          } col-3`}
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
