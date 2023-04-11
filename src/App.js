import Home from "./Home";
import Navbar from "./Navbar";
import Notes from "./Notes";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
