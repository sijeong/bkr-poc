import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { MyInfo } from './pages/MyInfo';
import { Login } from './pages/Login';
import { EmployeeInfoList } from './pages/EmployeeList';
import GoogleFontLoader from 'react-google-font-loader';
import StoreProvider from "./context";

import "./App.css";

const App: React.FC = () => {
  return (<div>
    <GoogleFontLoader 
      fonts={[
        {
          font: 'Gothic+A1',
          weights: [100, 400, '400i']
        }
      ]}
      subsets={['korean']}
    />
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/myInfo' component={MyInfo} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/employeeList' component={EmployeeInfoList} />
        </Switch>
      </Router>
    </StoreProvider>
  </div>)
};

export default App;
