import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserIdentity from './UserIdentity';
import UserAddress from './UserAddress';

const UserDetail = (props) => {
  const [user, setUser] = useState(null);
  const { users, selectedUserId } = useSelector(store => store.userReducer);

  useEffect(() => {
    if (selectedUserId !== null) {
      const selectedUser = users.find((u) => u.id === selectedUserId);
      setUser(selectedUser);
    }
  }, [selectedUserId]);

  return (
    <div>
      {
        user && (
          <>
            <UserIdentity user={user} />
            <UserAddress address={user.address} />

            <Link to={`/user/${user.id}`}>
              Voir les albums
            </Link>
          </>
        )
      }
    </div>
  );
};

export default UserDetail;
