import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AddDayPage from "./AddDayPage";
import Header from "./Header"
import Footer from "./Footer"

function App() { 

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

  function handleAddDay(dayToAdd) {
    const updatedDaysList = [...daysList, dayToAdd]
    setDaysList(updatedDaysList)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/add">
          <AddDayPage onAddDay={handleAddDay} />
        </Route>
        <Route exact path="/">
          <HomePage daysList={daysList} onUpdateDay={handleUpdateDay} onDeleteDay={handleDeleteDay} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
