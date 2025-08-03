import React from "react";

const players = [
  { name: "Jack", score: 53 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Amin", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Smith", score: 61 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];

const ListOfPlayers = () => {
  const below70 = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
