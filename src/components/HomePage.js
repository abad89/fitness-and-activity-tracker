import { useState } from "react";
import DayCard from "./DayCard";
import Buttons from "./Buttons";
import Charts from "./Charts";

function HomePage({ daysList, onUpdateDay, onDeleteDay }) {


  const daysItem = daysList.sort(sortByIso).map((day) => (
    <DayCard
      onDeleteDay={onDeleteDay}
      onUpdateDay={onUpdateDay}
      key={day.id}
      day={day}
    />
  ));

  const [hideSleepChart, setHideSleepChart] = useState(true);
  const [hideStepsChart, setHideStepsChart] = useState(true);

  function sortByIso(a, b){
    return b.iso > a.iso ? 1 : -1
  }

  function handleSleepClick() {
    setHideSleepChart((hideSleepChart) => !hideSleepChart);
  }
  function handleStepsClick() {
    setHideStepsChart((hideStepsChart) => !hideStepsChart);
  }

  return (
    <div className="container text-center">
      <Buttons
        onSleepClick={handleSleepClick}
        onStepsClick={handleStepsClick}
        hideSleepChart={hideSleepChart}
        hideStepsChart={hideStepsChart}
      />
      <div className="d-flex mw-100 justify-content-evenly"></div>
      <Charts
        daysList={daysList}
        hideSleepChart={hideSleepChart}
        hideStepsChart={hideStepsChart}
      />
      <div className="row">{daysItem}</div>
    </div>
  );
}

export default HomePage;
