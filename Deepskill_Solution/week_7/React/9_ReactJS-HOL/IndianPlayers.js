import React from "react";

const oddPlayers = ["Sachin1", "Virat3", "Yuvraj5"];
const evenPlayers = ["Dhoni2", "Rohit4", "Rain6"];
const allPlayers = [
  "First Player",
  "Second Player",
  "Third Player",
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

const IndianPlayers = () => {
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First: {oddPlayers[0]}</li>
        <li>Third: {oddPlayers[1]}</li>
        <li>Fifth: {oddPlayers[2]}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>Second: {evenPlayers[0]}</li>
        <li>Fourth: {evenPlayers[1]}</li>
        <li>Sixth: {evenPlayers[2]}</li>
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
