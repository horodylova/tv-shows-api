import { useState } from "react";

import FormSearchBar from "./FormSearchBar";
import ListOfResults from "./ListOfResults";

function SearchProvider() {

    const [state, setState] = useState({
        name: "",
        country: ""
    })

  return (
    <div> 
        <FormSearchBar state={state} setState={setState}/>
        <ListOfResults  state={state}/>
    </div>
  )
}

export default SearchProvider;