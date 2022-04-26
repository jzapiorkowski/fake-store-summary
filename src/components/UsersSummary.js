import React from 'react';

function UsersSummary({ users }) {
  return (
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
        {users.map((user) => {
          return (
            <tr>
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
  );
}

export default UsersSummary;
