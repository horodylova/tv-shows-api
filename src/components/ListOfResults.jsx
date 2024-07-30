import React, { useEffect, useState } from 'react';
import Card from "./Card";

function ListOfResults({ nameAndCountry }) {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nameAndCountry.name || nameAndCountry.country) {
      setIsLoading(true);
      fetch(`https://api.tvmaze.com/search/people?q=${nameAndCountry.name}&country=${nameAndCountry.country}`)
        .then(response => response.json())
        .then(data => {
          setPersons(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [nameAndCountry]);

  return (
    <ul>
      {isLoading ? <p>Loading...</p> : <Card persons={persons} />}
    </ul>
  );
}

export default ListOfResults;
