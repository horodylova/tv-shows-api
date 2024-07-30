 import { useState } from "react";
 import Card from "./Card";


function ListOfResults() {
    const [persons, setPersons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('error')
  
    return (
   <ul>
    <Card/>
   </ul>
  )
}

export default ListOfResults