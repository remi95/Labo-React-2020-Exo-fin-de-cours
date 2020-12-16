import React from 'react';
import { useSelector } from 'react-redux';
import UserListItem from './UserListItem';

const UsersList = (props) => {
  const { users, isLoading } = useSelector(store => store.userReducer);

  return (
    <div>
      {
        isLoading
          ? 'Chargement ...'
          : (
            <ul>
              { users.map((user) => <UserListItem key={user.id} user={user} />) }
            </ul>
          )
      }
    </div>
  );
};

export default UsersList;
