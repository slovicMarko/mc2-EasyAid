import React from 'react';
import './cssFiles/leaderboard.scss';

const leaderboardData = [
  { place:1, name: 'John', score: 100 },
  { place:2, name: 'Jane', score: 90 },
  { place:3, name: 'Bob', score: 80 },
  { place:4, name: 'Alice', score: 70 },
  { place:5, name: 'Mike', score: 60 },
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
              <td>{user.place}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
