import { useState } from "react";

import FormSearchBar from "./FormSearchBar";
import ListOfResults from "./ListOfResults";

function SearchProvider() {

    const [nameAndCountry, setnameAndCountry] = useState({
        name: "",
        country: ""
    })

  return (
    <> 
        <FormSearchBar nameAndCountry={nameAndCountry} setnameAndCountry={setnameAndCountry}/>
        <ListOfResults nameAndCountry={nameAndCountry}/>
    </>
  )
}

export default SearchProvider;