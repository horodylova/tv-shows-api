 import { useState } from "react";
 import Card from "./Card";


function ListOfResults({state}) {
    const [persons, setPersons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('error')

    const url = 'https://api.tvmaze.com/search/people'
    fetch(url, )
  
    return (
   <ul>
    <Card/>
   </ul>
  )
}

export default ListOfResults