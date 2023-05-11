import React from 'react';
import './cssFiles/leaderboard.scss';

const leaderboardData = [
  { place:1,profilePic:"/images/profilePic.jpg", name: 'Marko Markić', score: 8 },
  { place:2,profilePic:"/images/profilePic.jpg", name: 'Hrvoje Horvat', score: 7 },
  { place:3,profilePic:"/images/profilePic.jpg", name: 'Branko Babić', score: 6 },
  { place:4,profilePic:"/images/profilePic.jpg", name: 'Trpimir Trpimirović', score: 6 },
  { place:5,profilePic:"/images/profilePic.jpg", name: 'Ivan Ivanović', score: 5 },
  { place:6,profilePic:"/images/profilePic.jpg", name: 'Branka Brankić', score: 4 },
  { place:7,profilePic:"/images/profilePic.jpg", name: 'Dubravko Dubravkić', score: 3 },
  { place:8,profilePic:"/images/profilePic.jpg", name: 'Jelena Jelinić', score: 2 },
];

export const Leaderboard = () => {
  return (
    <div className="leaderboard-block">
      <h2>Poredak</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Ime</th>
            <th className='num-of-events-heading'>Broj akcija</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{user.place}.</td>
              <td className='profile-picture'><img src={user.profilePic} /></td>
              <td className='user-name'>{user.name}</td>
              <td className='num-of-events'>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
