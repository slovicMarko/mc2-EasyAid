import React from 'react';
import './cssFiles/leaderboard.scss';

const leaderboardData = [
  { name: 'John', score: 100 },
  { name: 'Jane', score: 90 },
  { name: 'Bob', score: 80 },
  { name: 'Alice', score: 70 },
  { name: 'Mike', score: 60 },
];

export const Leaderboard = () => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
