import {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AddDayPage from "./AddDayPage";

function App() {
  const testProp = "This is the testProp string!";

  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/add">
          <AddDayPage />
        </Route>
        <Route exact path="/">
          <HomePage testProp2={testProp} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
