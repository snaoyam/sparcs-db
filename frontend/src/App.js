import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CounterPage from "./components/CounterPage";
import DogPage from "./components/DogPage";
import TodoPage from "./components/TodoPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Main</h1>
        </Route>
        <Route exact path="/counter">
          <CounterPage />
        </Route>
        <Route exact path="/dogs">
          <DogPage />
        </Route>
        <Route exact path="/todo">
          <TodoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
