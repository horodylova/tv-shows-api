import React from 'react';

function Card({ persons }) {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          <div>{person.person.name}</div>
          {person.person.image && person.person.image.medium ? (
            <img src={person.person.image.medium} alt={`${person.person.name} portrait`} />
          ) : (
            <div>No Image Available</div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Card;

