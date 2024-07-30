import React from 'react';

function Card({ persons }) {
  return (
    <>
      {persons.map((person, index) => (
        <li key={index}>
          <div>{person.person.name}</div>
          {person.person.country && <div>{person.person.country.name}</div>}
        </li>
      ))}
    </>
  );
}

export default Card;
