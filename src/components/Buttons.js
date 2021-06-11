import { NavLink } from "react-router-dom"

function Buttons({ onSleepClick, onStepsClick, hideSleepChart, hideStepsChart }) {
  return (
    <div className="my-5">
      <button
        onClick={onStepsClick}
        type="button"
        className={`
            ${hideStepsChart ? `btn-secondary` : `btn-warning`}
            mx-2 btn col-3`}
      >
        {hideStepsChart ? "Hide" : "Show"} Steps Chart
      </button>
      <NavLink to="/add">
        <button className="mx-2 btn btn-success col-3">Add Day</button>
      </NavLink>
      <button
        onClick={onSleepClick}
        className={`
            ${hideSleepChart ? `btn-secondary` : `btn-warning`} 
            mx-2 btn col-3`}
      >
        {hideSleepChart ? "Hide" : "Show"} Sleep Amount Chart
      </button>
    </div>
  );
}

export default Buttons;
