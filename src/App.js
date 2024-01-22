// App.js
import React from 'react';
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Login from './loginpage/Login';
import './App.css';

const Home = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Add logic to handle button click, e.g., redirect to login page
    history.push('/Login');
  };

  return (
    <div className='bg'>
      {/* Your existing homepage content */}
      <div className="custom-popup iconic">
        <img className="iconicimg" src={require('./mainpage/iconic.png')} alt="" />
      </div>
      <div className="women">
        <img className="womenimg" src={require('./mainpage/womentxt.png')} alt="" />
      </div>
      <div className="center">
        <button onClick={handleButtonClick} className="loginbtn2 textlog">
          Log In
        </button>
      </div>
      <div className="textdis">
        Along with searching for coupons, did you <br /> know that you can also earn rewards, get
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
  