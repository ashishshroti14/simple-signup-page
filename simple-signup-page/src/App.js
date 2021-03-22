import './App.css';
import 'antd/dist/antd.css';
import Signup from './components/Signup';
import Success from './components/Success';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
