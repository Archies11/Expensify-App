import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    Dashborad
  </div>
);

const AddExpensePage = () => (
  <div>
    Add
  </div>
);

const EditExpensePage = () => (
  <div>
    Edit
  </div>
);

const HelpPage = () => (
  <div>
    Help
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage} /> 
    </Switch>
  </BrowserRouter>
);
  
ReactDOM.render(routes, document.getElementById('app'));
  // WAY TO GIVE DEFAULT VALS TO OPTIONS : ReactDOM.render(<IndecisionApp options={['one','two']}/>, document.getElementById('app'));

  
