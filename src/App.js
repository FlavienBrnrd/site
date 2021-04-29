import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Styles
import './App.css';
import './components/NavBar/NavBar.css';
import './components/Footer/Footer.css';

// Main entry point
function App() {
  return (
    <Router>
      <div className="App">

        <NavBar></NavBar>

        <div className="content">
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/about"> <About /> </Route>
            <Route exact path="/error"> <Error /></Route>
          </Switch>

        </div>

        <Footer></Footer>

      </div>
    </Router>
  );
}

export default App;
