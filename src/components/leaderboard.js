import React from 'react';
import './cssFiles/leaderboard.scss';

const leaderboardData = [
  { place:1, name: 'Marko Markić', score: 8 },
  { place:2, name: 'Hrvoje Horvat', score: 7 },
  { place:3, name: 'Branko Babić', score: 6 },
  { place:4, name: 'Trpimir Trpimirović', score: 6 },
  { place:5, name: 'Ivan Ivanović', score: 5 },
  { place:6, name: 'Branka Brankić', score: 4 },
  { place:7, name: 'Dubravko Dubravkić', score: 3 },
  { place:8, name: 'Jelena Jelinić', score: 2 },
];

export const Leaderboard = () => {
  return (
    <div className="leaderboard-block">
      <h2>Ljestvica</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ime</th>
            <th>Broj akcija</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{user.place}.</td>
              <td className='user-name'>{user.name}</td>
              <td className='num-of-events'>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
