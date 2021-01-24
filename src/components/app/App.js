import './App.css';
import Home from '../home/Home'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Searchpage from '../searchPage/SearchPage'


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
