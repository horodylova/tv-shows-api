import { useState } from "react";

import FormSearchBar from "./FormSearchBar";
import ListOfResults from "./ListOfResults";

function SearchProvider() {

  const [searchName, setSearchName] = useState('')
  const [searchCountry, setSearchCountry] = useState("")

  return (
    <div> 
        <FormSearchBar setSearchCountry={setSearchCountry} setSearchTerm={setSearchName}/>
        <ListOfResults searchCountry= {searchCountry} searchTerm={searchName}/>
    </div>
  )
}

export default SearchProvider;