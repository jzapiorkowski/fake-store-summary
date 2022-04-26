import React from 'react';
import findTwoFurthestUsers from '../../utils/FindFurthestUsers';
import FurthestUsers from '../furthestUsers/FurthestUsers';
import './usersSummary.scss';

function UsersSummary({ users }) {
  const [firstUser, secondUser, maxDistance] = findTwoFurthestUsers(users);

  return (
    <>
      <h3>Two users living furthest away from each other</h3>
      <FurthestUsers
        firstUser={firstUser}
        secondUser={secondUser}
        distance={maxDistance}
      />
      <h3>All users</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name.firstname}</td>
                <td>{user.name.lastname}</td>
                <td>{user.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UsersSummary;
