import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UsersList from '../components/UsersList';
import UserDetail from '../components/UserDetail';
import { fetchUsers } from '../actions/UserActions';

const MainPage = () => (
  <div>
    <h1>Liste utilisateurs</h1>

    <UsersList />
    <UserDetail />
  </div>
);

export default MainPage;
