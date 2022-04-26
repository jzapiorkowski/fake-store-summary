import React from 'react';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import './furthestUsers.scss';

function FurthestUsers({ firstUser, secondUser, distance }) {
  return (
    <div className='furthest'>
      <table className='user'>
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
          <tr>
            <td>{firstUser.id}</td>
            <td>{firstUser.username}</td>
            <td>{firstUser.name.firstname}</td>
            <td>{firstUser.name.lastname}</td>
            <td>{firstUser.address.city}</td>
          </tr>
        </tbody>
      </table>
      <div className='distance'>
        {distance.toFixed(2)}
        <SocialDistanceIcon />
      </div>
      <table className='user'>
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
          <tr>
            <td>{secondUser.id}</td>
            <td>{secondUser.username}</td>
            <td>{secondUser.name.firstname}</td>
            <td>{secondUser.name.lastname}</td>
            <td>{secondUser.address.city}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FurthestUsers;
