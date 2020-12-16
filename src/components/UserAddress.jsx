import React from 'react';

const UserAddress = ({ address }) => (
  <div>
    <strong>Adresse</strong>
    <ul>
      <li>{ address.street }</li>
      <li>{ address.suite }</li>
      <li>{ address.city }</li>
      <li>{ address.zipcode }</li>
    </ul>
  </div>
);

export default UserAddress;
