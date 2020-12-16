import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUserId } from '../actions/UserActions';

const UserListItem = (props) => {
  const { user } = props;
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setSelectedUserId(user.id))}
      onKeyPress={() => dispatch(setSelectedUserId(user.id))}
      role="button"
      tabIndex={0}
    >
      {user.name}
    </div>
  );
};

export default UserListItem;
