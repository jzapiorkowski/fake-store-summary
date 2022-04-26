import React from 'react';

function MostExpensiveCart({ cart, users }) {
  const userInfo = users.find((user) => {
    return user.id === cart.userId;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>UserID</th>
          <th>User's full name</th>
          <th>Date</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cart.id}</td>
          <td>{cart.userId}</td>
          <td>
            {userInfo.name.firstname} {userInfo.name.lastname}
          </td>
          <td>{cart.date.substring(0, 10)}</td>
          <td>{cart.value}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MostExpensiveCart;
