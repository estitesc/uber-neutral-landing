import React from 'react';
import './App.css';
import EmailForm from './EmailForm';
import Landing from './Landing';
import Calculator from './Calculator';
import { Route, Switch } from 'react-router-dom';
import './fonts/ClanOT-Book.ttf';
import './fonts/ClanOT-Medium.ttf';

function App() {
  return (
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;
