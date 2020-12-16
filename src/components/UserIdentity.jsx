import React from 'react';

const UserIdentity = ({ user }) => (
  <div>
    <h2>{ user.name }</h2>
    <div>{ user.username }</div>

    <div>
      <span>email: </span>
      <span>{ user.email }</span>
      <br />
      <span>tel: </span>
      <span>{ user.phone }</span>
      <br />
      <span>web: </span>
      <span>{ user.website }</span>
    </div>
  </div>
);

export default UserIdentity;
