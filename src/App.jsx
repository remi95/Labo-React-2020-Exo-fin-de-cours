import React, { useEffect } from 'react';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import store from './store';
import UserPage from './pages/UserPage';
import { fetchUsers } from './actions/UserActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/user/:id">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
