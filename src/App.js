import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React} from "react";


// Components
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Projects from "./pages/Projects";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Styles
import './App.css';

// Main entry point
function App() {
  return (
    <Router>
      <div className="App">

        <NavBar></NavBar>

        <div className="content">
          <Switch>
          <Route exact path="/site"> <Home /> </Route>
            <Route exact path="/site/about"> <About /> </Route>
            <Route exact path="/site/contact"> <Contact /> </Route>
            <Route exact path="/site/projects"> <Projects /> </Route>
            <Route exact path="/site/error"> <Error /></Route>
          </Switch>
        </div>

        

      </div>
    </Router>
  );
}

export default App;
