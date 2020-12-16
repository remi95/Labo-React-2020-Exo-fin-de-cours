import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserIdentity from '../components/UserIdentity';
import UserAddress from '../components/UserAddress';
import { setSelectedUserId } from '../actions/UserActions';
import AlbumList from '../components/AlbumList';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { users, selectedUserId } = useSelector(store => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setSelectedUserId(id));
    }
  }, [id]);

  useEffect(() => {
    if (selectedUserId !== null && users.length > 0) {
      const selectedUser = users.find((u) => u.id.toString() === selectedUserId.toString());
      setUser(selectedUser);
    }
  }, [selectedUserId, users]);

  return (
    <>
      {
        user && (
          <>
            <UserIdentity user={user} />
            <UserAddress address={user.address} />
            <AlbumList />
          </>
        )
      }
    </>
  );
};

export default UserPage;
