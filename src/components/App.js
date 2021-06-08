import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AddDayPage from "./AddDayPage";

function App() { 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/add">
          <AddDayPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
