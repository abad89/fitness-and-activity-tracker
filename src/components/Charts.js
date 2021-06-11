import StepsChart from "./StepsChart";
import SleepChart from "./SleepChart";

function Charts({ daysList, hideSleepChart, hideStepsChart }) {
  return (
    <div className="container d-flex justify-content-evenly row mb-5">
      {hideStepsChart ? <StepsChart daysList={daysList} /> : null}
      {hideSleepChart ? <SleepChart daysList={daysList} /> : null}
    </div>
  );
}

export default Charts