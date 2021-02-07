import './App.css';
import HomePage from "./page/HomePage/HomePage";
import SiteMap from "./page/SiteMap/SiteMap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/sitemap" component={SiteMap} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

