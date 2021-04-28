import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// custom import
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';


function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route exact path='/about'> <About /> </Route>
            <Route exact path='/error'> <Error /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
