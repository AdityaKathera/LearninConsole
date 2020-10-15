import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';


const Routes = (
    <Route exact path="/add" component={App}>
    </Route>
)

export default Routes